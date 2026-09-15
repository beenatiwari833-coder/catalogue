/**
 * Test suite for Discount & Coupon System
 */
const assert = require('assert');

// 1. Discount Pricing Helper Logic
function getOfferingPricing(item) {
  const originalPrice = parseFloat(item.original_price != null ? item.original_price : (item.price || 0)) || 0;
  const discountPct = parseFloat(item.discount_percentage || 0) || 0;
  const effectivePrice = discountPct > 0 
    ? parseFloat((originalPrice * (1 - discountPct / 100)).toFixed(2)) 
    : originalPrice;
  return { originalPrice, discountPct, effectivePrice };
}

// 2. Server-side Order Payload Verification Engine Logic
function serverSideValidateOrderPayload(vendor, chosenItems, itemQtys, couponCode, paymentMode, isFlagEnabled, couponsList) {
  let originalSubtotal = 0;
  let vendorDiscountedSubtotal = 0;

  const validatedItems = chosenItems.map(rawItem => {
    const authItem = (vendor.menu || []).find(m => m.id === rawItem.id) || rawItem;
    const qty = Math.max(1, parseInt(itemQtys[authItem.id] || 1, 10));

    const origPrice = parseFloat(authItem.original_price != null ? authItem.original_price : (authItem.price || 0)) || 0;
    const discountPct = isFlagEnabled ? (parseFloat(authItem.discount_percentage || 0) || 0) : 0;
    const effPrice = discountPct > 0 
      ? parseFloat((origPrice * (1 - discountPct / 100)).toFixed(2)) 
      : origPrice;

    if (origPrice > 0) {
      originalSubtotal += (origPrice * qty);
      vendorDiscountedSubtotal += (effPrice * qty);
    }

    return {
      id: authItem.id,
      name: authItem.name,
      qty,
      original_price: origPrice,
      discount_percentage: discountPct,
      effective_price: effPrice,
      itemTotal: effPrice * qty
    };
  });

  const vendorMarkdownTotal = Math.max(0, originalSubtotal - vendorDiscountedSubtotal);

  let appliedCoupon = null;
  let couponDeduction = 0;
  let couponError = null;

  if (isFlagEnabled && couponCode) {
    const cleanCode = String(couponCode).trim().toUpperCase();
    const coupon = (couponsList || []).find(c => c.code === cleanCode && c.is_active !== false);

    if (!coupon) {
      couponError = 'Invalid or expired coupon code.';
    } else if (coupon.vendor_id && coupon.vendor_id !== vendor.id) {
      couponError = 'This coupon is not valid for this vendor.';
    } else if (coupon.min_order_value && vendorDiscountedSubtotal < coupon.min_order_value) {
      couponError = `Minimum order value of ₹${coupon.min_order_value} required for coupon ${coupon.code}.`;
    } else if (coupon.bank_identifier && paymentMode) {
      const normCouponBank = coupon.bank_identifier.toUpperCase().replace(/[\s_]+/g, '');
      const normPaymentMode = paymentMode.toUpperCase().replace(/[\s_]+/g, '');
      if (!normPaymentMode.includes(normCouponBank)) {
        couponError = `Coupon ${coupon.code} requires payment mode ${coupon.bank_identifier}.`;
      } else {
        appliedCoupon = coupon;
        if (coupon.discount_type === 'PERCENTAGE') {
          couponDeduction = parseFloat((vendorDiscountedSubtotal * (coupon.discount_value / 100)).toFixed(2));
        } else {
          couponDeduction = Math.min(vendorDiscountedSubtotal, parseFloat(coupon.discount_value));
        }
      }
    } else {
      appliedCoupon = coupon;
      if (coupon.discount_type === 'PERCENTAGE') {
        couponDeduction = parseFloat((vendorDiscountedSubtotal * (coupon.discount_value / 100)).toFixed(2));
      } else {
        couponDeduction = Math.min(vendorDiscountedSubtotal, parseFloat(coupon.discount_value));
      }
    }
  }

  const finalPayable = Math.max(0, parseFloat((vendorDiscountedSubtotal - couponDeduction).toFixed(2)));

  return {
    isFlagEnabled,
    validatedItems,
    originalSubtotal,
    vendorMarkdownTotal,
    subtotal: vendorDiscountedSubtotal,
    appliedCoupon,
    couponDeduction,
    couponError,
    finalPayable
  };
}

// 3. Test Cases
console.log('Running Discount & Coupon Engine Tests...');

// Test 1: Vendor Percentage Discount Calculation
const item1 = { id: 'm1', name: 'Deep Cleaning', price: 1000, original_price: 1000, discount_percentage: 15 };
const p1 = getOfferingPricing(item1);
assert.strictEqual(p1.originalPrice, 1000);
assert.strictEqual(p1.discountPct, 15);
assert.strictEqual(p1.effectivePrice, 850);
console.log('✓ Test 1 Passed: Vendor Item Effective Price = ₹850 (15% off ₹1000)');

// Test 2: Order payload validation with ENABLED flag, vendor discount + GPAY10 percentage coupon
const mockVendor = {
  id: 'v1',
  venture: 'CleanTech Services',
  menu: [item1]
};
const mockCoupons = [
  { id: 'c1', code: 'GPAY10', creator_type: 'ADMIN', discount_type: 'PERCENTAGE', discount_value: 10, min_order_value: 300, bank_identifier: 'GOOGLE_PAY', is_active: true }
];

const resEnabled = serverSideValidateOrderPayload(mockVendor, [item1], { m1: 1 }, 'GPAY10', 'Google Pay (Bank Tie-up Applied)', true, mockCoupons);
assert.strictEqual(resEnabled.originalSubtotal, 1000);
assert.strictEqual(resEnabled.vendorMarkdownTotal, 150);
assert.strictEqual(resEnabled.subtotal, 850);
assert.strictEqual(resEnabled.couponDeduction, 85);
assert.strictEqual(resEnabled.finalPayable, 765);
console.log('✓ Test 2 Passed: Enabled Flag Calculation (Subtotal 850, Coupon Deduction 85, Final Payable 765)');

// Test 3: Order payload validation with DISABLED flag
const resDisabled = serverSideValidateOrderPayload(mockVendor, [item1], { m1: 1 }, 'GPAY10', 'Google Pay', false, mockCoupons);
assert.strictEqual(resDisabled.originalSubtotal, 1000);
assert.strictEqual(resDisabled.vendorMarkdownTotal, 0);
assert.strictEqual(resDisabled.subtotal, 1000);
assert.strictEqual(resDisabled.couponDeduction, 0);
assert.strictEqual(resDisabled.finalPayable, 1000);
console.log('✓ Test 3 Passed: Disabled Flag Calculation (Subtotal 1000, Zero Discount Metadata, Final Payable 1000)');

// Test 4: Minimum order value validation failure
const resMinVal = serverSideValidateOrderPayload(mockVendor, [{ id: 'm2', original_price: 100, discount_percentage: 0 }], { m2: 1 }, 'GPAY10', 'Google Pay', true, mockCoupons);
assert.strictEqual(resMinVal.couponDeduction, 0);
assert.notStrictEqual(resMinVal.couponError, null);
console.log('✓ Test 4 Passed: Coupon Minimum Order Value Error Caught Correctly');

console.log('ALL TESTS PASSED SUCCESSFULLY! ✓');
