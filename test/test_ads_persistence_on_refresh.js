/**
 * Test verifying that advertisements persist across page reload/refresh
 * even when Firebase Storage or Firestore rules return permission errors.
 */
const { chromium } = require('playwright-core');
const assert = require('assert');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:8000';

async function run() {
  console.log('Testing advertisement persistence across page refresh...');
  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true
  });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  try {
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Enter admin mode
    await page.evaluate(() => {
      isAdmin = true;
      window._adminUid = 'test_admin_uid';
      selectedSociety = 'Prateek Laurel';
      switchAdminTab('advertisements');
    });
    await page.waitForTimeout(300);

    // Create an advertisement
    console.log('1. Creating advertisement in modal...');
    await page.evaluate(async () => {
      openAdvertisementModal();
      document.getElementById('ad_businessName').value = 'Test Car Showroom';
      document.getElementById('ad_tagline').value = 'Best cars in town';
      document.getElementById('ad_description').value = 'Top rated vehicles and deals for community residents.';
      document.getElementById('ad_category').value = 'Gift, Jewellery & Home Decor';
      document.getElementById('ad_location').value = 'Karol Bagh, New Delhi';
      _adCurrentImages = ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA='];
      document.getElementById('ad_startDate').value = '2026-09-24';
      document.getElementById('ad_endDate').value = '2026-10-24';
      document.getElementById('ad_paymentStatus').value = 'PAID';
      document.getElementById('ad_fee').value = 400;
      await saveAdAction('PUBLISHED');
    });

    await page.waitForTimeout(500);

    // Verify ad is in the list
    const adCountBefore = await page.evaluate(() => _allAdminAds.length);
    console.log(`Ad count before refresh: ${adCountBefore}`);
    assert.strictEqual(adCountBefore, 1, 'Should have 1 ad before refresh');

    // Reload / refresh the page
    console.log('2. Refreshing page...');
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1500);

    // Switch back to admin panel to inspect ads
    await page.evaluate(() => {
      isAdmin = true;
      window._adminUid = 'test_admin_uid';
      switchAdminTab('advertisements');
      const container = document.getElementById('adminTabContent');
      if (container) renderAdminAdvertisements(container);
    });
    await page.waitForTimeout(500);

    // Verify ad is STILL there after refresh!
    const adCountAfter = await page.evaluate(() => _allAdminAds.length);
    const adBizNameAfter = await page.evaluate(() => _allAdminAds[0]?.businessName);
    console.log(`Ad count after refresh: ${adCountAfter}, Name: ${adBizNameAfter}`);

    assert.strictEqual(adCountAfter, 1, 'Ad must NOT be removed after refresh!');
    assert.strictEqual(adBizNameAfter, 'Test Car Showroom', 'Ad businessName must match after refresh!');

    console.log('✅ PASS: Advertisement persisted successfully across page refresh!');
  } finally {
    await browser.close();
  }
}

run().catch(err => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
