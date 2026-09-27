const { chromium } = require('playwright-core');

(async () => {
  console.log('🚀 Testing Coupon Management (Add, Delete, Persistence)...');
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  // Listen to console logs
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.text().includes('coupon') || msg.text().includes('Firestore')) {
      console.log('PAGE LOG:', msg.text());
    }
  });

  await page.goto('http://localhost:8000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // Dismiss overlays
  await page.evaluate(() => {
    const locSplash = document.getElementById('locationSplash');
    if (locSplash) locSplash.style.display = 'none';
    const onb = document.getElementById('onboardingSplash');
    if (onb) onb.style.display = 'none';
    if (typeof closeOnboardingSplash === 'function') closeOnboardingSplash();
  });
  await page.waitForTimeout(300);

  // 1. Switch to Admin -> Coupons tab
  console.log('1. Navigating to Admin Dashboard -> Coupons Tab...');
  await page.evaluate(() => {
    isAdmin = true;
    switchPanel('admin');
    if (typeof switchAdminTab === 'function') switchAdminTab('coupons');
  });
  await page.waitForTimeout(600);

  // 2. Verify initial coupons loaded
  const initialCoupons = await page.evaluate(() => {
    return (_couponsList || []).map(c => c.code);
  });
  console.log('Initial coupon codes in table/memory:', initialCoupons);

  if (!initialCoupons.includes('TYNTRON20')) {
    console.error('❌ Failed: Expected initial coupons to include TYNTRON20');
    process.exit(1);
  }

  // 3. Test Deleting a Coupon (TYNTRON20)
  console.log('2. Deleting coupon TYNTRON20...');
  await page.evaluate(async () => {
    // Override window.confirm to auto-approve
    window.confirm = () => true;
    const tyntron = (_couponsList || []).find(c => c.code === 'TYNTRON20');
    if (tyntron) {
      await adminDeleteCoupon(tyntron.id);
    }
  });
  await page.waitForTimeout(600);

  const afterDeleteList = await page.evaluate(() => {
    return (_couponsList || []).map(c => c.code);
  });
  console.log('Coupons list after deleting TYNTRON20:', afterDeleteList);

  if (afterDeleteList.includes('TYNTRON20')) {
    console.error('❌ Failed: TYNTRON20 was not deleted!');
    process.exit(1);
  }

  // Verify it does NOT resurrect upon calling fsLoadCoupons() again
  console.log('3. Verifying deleted coupon does not resurrect on reload...');
  const reloadCheck = await page.evaluate(async () => {
    const fresh = await fsLoadCoupons();
    return fresh.map(c => c.code);
  });
  console.log('Coupons after fsLoadCoupons() reload:', reloadCheck);

  if (reloadCheck.includes('TYNTRON20')) {
    console.error('❌ Failed: TYNTRON20 resurrected after reloading coupons!');
    process.exit(1);
  }

  // 4. Test Adding a New Coupon (FESTIVE30)
  console.log('4. Adding a new coupon FESTIVE30...');
  await page.evaluate(async () => {
    openCouponEditModal({ creator_type: 'ADMIN', vendor_id: null });
    document.getElementById('cpn_code').value = 'FESTIVE30';
    document.getElementById('cpn_discount_type').value = 'PERCENTAGE';
    document.getElementById('cpn_discount_value').value = '30';
    document.getElementById('cpn_min_order_value').value = '150';
    await saveCouponForm({ preventDefault: () => {} });
  });
  await page.waitForTimeout(600);

  const afterAddList = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('.menu-table tbody tr td:first-child')).map(td => td.textContent.trim());
    return {
      memory: (_couponsList || []).map(c => c.code),
      tableRows: rows
    };
  });
  console.log('Coupons after adding FESTIVE30:', afterAddList);

  if (!afterAddList.memory.includes('FESTIVE30') || !afterAddList.tableRows.includes('FESTIVE30')) {
    console.error('❌ Failed: FESTIVE30 was not added to table or memory!');
    process.exit(1);
  }

  // 5. Test Deleting all coupons to ensure empty state works cleanly
  console.log('5. Deleting all remaining coupons...');
  await page.evaluate(async () => {
    window.confirm = () => true;
    const all = [...(_couponsList || [])];
    for (const c of all) {
      await adminDeleteCoupon(c.id);
    }
  });
  await page.waitForTimeout(600);

  const emptyState = await page.evaluate(() => {
    const tableText = document.querySelector('.menu-table tbody')?.textContent || '';
    return {
      count: (_couponsList || []).length,
      hasNoCouponsFound: tableText.includes('No coupons found')
    };
  });
  console.log('Empty state verification:', emptyState);

  if (emptyState.count !== 0 || !emptyState.hasNoCouponsFound) {
    console.error('❌ Failed: Expected 0 coupons and "No coupons found" text');
    process.exit(1);
  }

  console.log('🎉 ALL COUPON TESTS PASSED: Add, Delete, and Resurrection Prevention work flawlessly!');
  await browser.close();
})();
