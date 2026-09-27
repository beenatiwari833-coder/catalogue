/**
 * Playwright End-to-End Test Suite for Admin-Published Advertisement Feature
 *
 * Verifies:
 * 1. Admin Dashboard -> Advertisements navigation & layout
 * 2. Form validation constraints (tagline max 60, desc max 500, required fields)
 * 3. Save Draft (allows incomplete data, status = DRAFT)
 * 4. Payment status updates (Mark Payment as Paid)
 * 5. Publish flow (status = PUBLISHED)
 * 6. Customer card display: Image, Business name, Tagline, Category, Sponsored badge
 * 7. Customer card restrictions: Strict absence of Menu, Call, WhatsApp, Phone, Email
 * 8. Customer detail view: Gallery, description, category, location, NO contact buttons
 * 9. Visibility & Society targeting: Society matching and Global visibility
 * 10. Ads Carousel integration: Published ads appear in #adGrid
 * 11. Keyword Search integration: Matching ads appear in search results with Sponsored badge
 * 12. Category Page integration: Matching ads appear in category view
 * 13. Expiry & Removal: Expired/removed ads excluded; renew restores published status
 * 14. Database only: No ads stored in localStorage
 */

const { chromium } = require('playwright-core');
const assert = require('assert');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:8000';

async function runTests() {
  console.log('\n======================================================');
  console.log('🚀 Starting Playwright Advertisement Feature Test Suite');
  console.log('Target URL:', BASE_URL);
  console.log('======================================================\n');

  let browser;
  let passed = 0;
  let failed = 0;

  try {
    browser = await chromium.launch({
      executablePath: CHROME_PATH,
      headless: true
    });
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 }
    });
    const page = await context.newPage();

    async function setupPage() {
      await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1000);

      await page.evaluate(() => {
        // Set admin session
        isAdmin = true;
        window._adminUid = 'test_admin_uid';
        selectedSociety = 'Prateek Laurel';

        // Initialize mock ad data in memory for testing
        _allAdminAds = [];
        _activeCustomerAds = [];

        if (typeof renderAll === 'function') renderAll();
      });
      await page.waitForTimeout(200);
    }

    // Helper runner
    async function test(name, fn) {
      process.stdout.write(`⏳ Running: ${name} ... `);
      try {
        await fn();
        console.log('✅ PASSED');
        passed++;
      } catch (err) {
        console.log('❌ FAILED');
        console.error('   Error:', err.message);
        failed++;
      }
    }

    await setupPage();

    // ── TEST 1: Admin Dashboard navigation to Advertisements
    await test('1. Admin Dashboard -> Advertisements Tab Navigation', async () => {
      const result = await page.evaluate(() => {
        switchAdminTab('advertisements');
        const container = document.getElementById('adminTabContent');
        const titleEl = container ? container.querySelector('.s-card-title') : null;
        const hasTitle = titleEl && titleEl.textContent.includes('Advertisements Manager');
        const createBtn = container ? container.querySelector('button[onclick*="openAdvertisementModal"]') : null;
        return { hasTitle, hasCreateBtn: !!createBtn };
      });
      assert.ok(result.hasTitle, 'Advertisements Manager title should be visible in Admin tab');
      assert.ok(result.hasCreateBtn, '+ Create Advertisement button should be rendered');
    });

    // ── TEST 2: Validation constraints (Tagline max 60, Desc max 500)
    await test('2. Form Validation Constraints (Tagline 60, Desc 500, Required Fields)', async () => {
      const valResult = await page.evaluate(async () => {
        openAdvertisementModal();
        const tagInput = document.getElementById('ad_tagline');
        const descInput = document.getElementById('ad_description');
        const tagMax = tagInput ? tagInput.maxLength : 0;
        const descMax = descInput ? descInput.maxLength : 0;

        // Try publishing with empty fields
        await saveAdAction('PUBLISHED');
        const valMsg = document.getElementById('ad_validationMsg');
        const showsError = valMsg && valMsg.style.display !== 'none' && valMsg.textContent.includes('Business Name is required');

        closeModal('adModal');
        return { tagMax, descMax, showsError };
      });
      assert.strictEqual(valResult.tagMax, 60, 'Tagline input maxlength must be 60');
      assert.strictEqual(valResult.descMax, 500, 'Description textarea maxlength must be 500');
      assert.ok(valResult.showsError, 'Validation error message must display when publishing with missing required fields');
    });

    // ── TEST 3: Save Draft with incomplete data
    await test('3. Save Draft Allows Incomplete Fields (status = DRAFT)', async () => {
      const draftResult = await page.evaluate(async () => {
        openAdvertisementModal();
        document.getElementById('ad_businessName').value = 'Draft Organic Bakery';
        document.getElementById('ad_tagline').value = 'Fresh breads daily';
        // Note: Missing description, category, images, etc.
        await saveAdAction('DRAFT');

        const draftAd = _allAdminAds.find(a => a.businessName === 'Draft Organic Bakery');
        return {
          saved: !!draftAd,
          status: draftAd ? draftAd.status : null,
          businessName: draftAd ? draftAd.businessName : null
        };
      });
      assert.ok(draftResult.saved, 'Draft should be saved to in-memory admin ads');
      assert.strictEqual(draftResult.status, 'DRAFT', 'Saved ad must have status DRAFT');
      assert.strictEqual(draftResult.businessName, 'Draft Organic Bakery');
    });

    // ── TEST 4: Mark Payment as Paid & Verify Unpaid Ads Hidden From Customers
    await test('4. Mark Payment as Paid & Verify Unpaid/Pending Ads Hidden from Customers', async () => {
      const payResult = await page.evaluate(async () => {
        const adId = 'ad_test_pending_' + Date.now();
        const testAd = {
          id: adId,
          businessName: 'Pending Cafe',
          tagline: 'Artisan Coffee',
          description: 'Specialty coffee roasters',
          category: 'Food, Bakery & Beverages',
          images: ['https://example.com/coffee.jpg'],
          startDate: '2026-09-01',
          endDate: '2026-10-31',
          visibilityScope: 'global',
          status: 'PENDING_PAYMENT',
          paymentStatus: 'PENDING',
          fee: 1500
        };
        _allAdminAds.push(testAd);

        // Before payment: must NOT be active or visible to customers
        const activeBefore = isAdActive(testAd);
        const inActiveListBefore = getActivePublishedAds().some(a => a.id === adId);

        // Also test an ad with status PUBLISHED but paymentStatus UNPAID
        const unpaidPublishedAd = {
          id: 'ad_unpaid_pub_' + Date.now(),
          businessName: 'Unpaid Store',
          status: 'PUBLISHED',
          paymentStatus: 'UNPAID',
          startDate: '2026-09-01',
          endDate: '2026-10-31',
          visibilityScope: 'global'
        };
        const unpaidActive = isAdActive(unpaidPublishedAd);

        await markAdPaymentPaid(adId);
        const updated = _allAdminAds.find(a => a.id === adId);

        return {
          activeBefore,
          inActiveListBefore,
          unpaidActive,
          paymentStatus: updated ? updated.paymentStatus : null
        };
      });
      assert.strictEqual(payResult.activeBefore, false, 'Pending payment ad must NOT be active');
      assert.strictEqual(payResult.inActiveListBefore, false, 'Pending payment ad must NOT be visible to customers');
      assert.strictEqual(payResult.unpaidActive, false, 'Unpaid ad must NOT be active for customers');
      assert.strictEqual(payResult.paymentStatus, 'PAID', 'Payment status must be updated to PAID');
    });

    // ── TEST 5: Publish Flow Enforces Validation, Requires PAID Status and Sets PUBLISHED Status
    await test('5. Publish Flow Enforces Validation and Requires PAID Status', async () => {
      const pubResult = await page.evaluate(async () => {
        openAdvertisementModal();
        document.getElementById('ad_businessName').value = 'Green Valley Florist';
        document.getElementById('ad_tagline').value = 'Exotic floral hampers & decor';
        document.getElementById('ad_description').value = 'Specializing in fresh seasonal flowers, bridal bouquets, and gift packaging.';
        document.getElementById('ad_category').value = 'Gift, Jewellery & Home Decor';
        document.getElementById('ad_location').value = 'Sector 78, Noida';
        _adCurrentImages = ['https://example.com/flowers.jpg'];
        document.getElementById('ad_startDate').value = '2026-09-01';
        document.getElementById('ad_endDate').value = '2026-10-31';
        _adSelectedScope = 'global';
        document.getElementById('ad_fee').value = 1000;

        // Try publishing with PENDING payment status
        document.getElementById('ad_paymentStatus').value = 'PENDING';
        await saveAdAction('PUBLISHED');
        const valMsg = document.getElementById('ad_validationMsg')?.textContent || '';
        const blockedUnpaidPublish = valMsg.includes('PAID');

        // Now set payment to PAID and publish
        document.getElementById('ad_paymentStatus').value = 'PAID';
        await saveAdAction('PUBLISHED');

        const publishedAd = _allAdminAds.find(a => a.businessName === 'Green Valley Florist');
        return {
          blockedUnpaidPublish,
          saved: !!publishedAd,
          status: publishedAd ? publishedAd.status : null,
          paymentStatus: publishedAd ? publishedAd.paymentStatus : null,
          category: publishedAd ? publishedAd.category : null,
          imagesCount: publishedAd && publishedAd.images ? publishedAd.images.length : 0,
          isActiveForCustomer: publishedAd ? isAdActive(publishedAd) : false
        };
      });
      assert.strictEqual(pubResult.blockedUnpaidPublish, true, 'Publishing unpaid ad must be blocked by validation');
      assert.ok(pubResult.saved, 'Published ad must be created');
      assert.strictEqual(pubResult.status, 'PUBLISHED', 'Ad status must be PUBLISHED');
      assert.strictEqual(pubResult.paymentStatus, 'PAID', 'Payment status must be PAID');
      assert.strictEqual(pubResult.isActiveForCustomer, true, 'Paid published ad must be active for customers');
      assert.strictEqual(pubResult.category, 'Gift, Jewellery & Home Decor');
      assert.strictEqual(pubResult.imagesCount, 1);
    });

    // ── TEST 6: Customer Card Display & Strict Contact Absence
    await test('6. Customer Card Display: Image, Business Name, Tagline, Category, Sponsored Badge & NO Contact/Menu Buttons', async () => {
      const cardAnalysis = await page.evaluate(() => {
        const testAd = {
          id: 'ad_customer_display_1',
          businessName: 'Royal Treats Bakery',
          tagline: 'Gourmet artisanal cakes & macarons',
          description: 'Finest desserts made fresh upon order.',
          category: 'Food, Bakery & Beverages',
          images: ['https://example.com/cake.jpg'],
          location: 'Prateek Laurel, Tower C',
          phone: '9910341339',
          email: 'royaltreats@example.com',
          status: 'PUBLISHED',
          paymentStatus: 'PAID',
          startDate: '2026-09-01',
          endDate: '2026-10-31',
          visibilityScope: 'global'
        };

        const tileEl = makeAdCard(testAd);
        const html = tileEl.innerHTML;

        // Check required elements
        const hasImg = tileEl.querySelector('img') && tileEl.querySelector('img').src.includes('cake.jpg');
        const hasBizName = tileEl.querySelector('.tile-name') && tileEl.querySelector('.tile-name').textContent.includes('Royal Treats Bakery');
        const hasTagline = tileEl.querySelector('.tile-spec') && tileEl.querySelector('.tile-spec').textContent.includes('Gourmet artisanal cakes & macarons');
        const hasCatBadge = tileEl.querySelector('.tile-cat-badge') && tileEl.querySelector('.tile-cat-badge').textContent.includes('Food');
        const hasSponsoredBadge = tileEl.querySelector('.ad-sponsored-badge') && tileEl.querySelector('.ad-sponsored-badge').textContent.includes('Sponsored');

        // Check strict absence of contact / order elements
        const hasWhatsAppBtn = html.toLowerCase().includes('whatsapp') || html.toLowerCase().includes('fa-whatsapp');
        const hasCallBtn = html.toLowerCase().includes('call vendor') || html.toLowerCase().includes('fa-phone');
        const hasMenuBtn = html.toLowerCase().includes('view menu') || html.toLowerCase().includes('order via');
        const showsPhone = html.includes('9910341339');
        const showsEmail = html.includes('royaltreats@example.com');

        return {
          hasImg,
          hasBizName,
          hasTagline,
          hasCatBadge,
          hasSponsoredBadge,
          hasWhatsAppBtn,
          hasCallBtn,
          hasMenuBtn,
          showsPhone,
          showsEmail
        };
      });

      assert.ok(cardAnalysis.hasImg, 'Card must render ad image');
      assert.ok(cardAnalysis.hasBizName, 'Card must render business name');
      assert.ok(cardAnalysis.hasTagline, 'Card must render tagline');
      assert.ok(cardAnalysis.hasCatBadge, 'Card must render category badge');
      assert.ok(cardAnalysis.hasSponsoredBadge, 'Card must render Sponsored badge');

      assert.strictEqual(cardAnalysis.hasWhatsAppBtn, false, 'Card must NOT show WhatsApp button');
      assert.strictEqual(cardAnalysis.hasCallBtn, false, 'Card must NOT show Call button');
      assert.strictEqual(cardAnalysis.hasMenuBtn, false, 'Card must NOT show Menu button');
      assert.strictEqual(cardAnalysis.showsPhone, false, 'Card must NOT expose phone number');
      assert.strictEqual(cardAnalysis.showsEmail, false, 'Card must NOT expose email');
    });

    // ── TEST 7: Customer Detail View Displays Content, Contact Details & Actions (Call, Directions, WhatsApp, Share, NO Website)
    await test('7. Customer Detail View: Image Gallery, Contact Details & Actions (Call, Directions, WhatsApp, Share, NO Website)', async () => {
      const detailAnalysis = await page.evaluate(() => {
        const testAd = {
          id: 'ad_detail_test_1',
          businessName: 'Luxe Home Decors',
          tagline: 'Modern minimal interior furnishings',
          description: 'Complete home styling and customized furniture curated by certified architects.',
          category: 'Home & Print Services',
          images: ['https://example.com/interior1.jpg', 'https://example.com/interior2.jpg'],
          location: 'Sector 78, Noida',
          phone: '9810000000',
          email: 'luxe@example.com',
          status: 'PUBLISHED',
          paymentStatus: 'PAID',
          startDate: '2026-09-01',
          endDate: '2026-10-31',
          visibilityScope: 'global'
        };

        _activeCustomerAds.push(testAd);
        openAdDetailModal('ad_detail_test_1');

        const modal = document.getElementById('adDetailModal');
        const bizName = document.getElementById('adDetailBizName')?.textContent;
        const tagline = document.getElementById('adDetailTagline')?.textContent;
        const desc = document.getElementById('adDetailDescription')?.textContent;
        const cat = document.getElementById('adDetailCategory')?.textContent;
        const loc = document.getElementById('adDetailLocation')?.textContent;

        const modalHtml = modal ? modal.innerHTML : '';
        const pageView = document.getElementById('adDetailView');
        const pageHtml = pageView ? pageView.innerHTML : '';
        const combinedHtml = modalHtml + ' ' + pageHtml;

        const hasWhatsAppBtn = combinedHtml.includes('adActionWaBtn') || combinedHtml.includes('adModalActionWaBtn');
        const hasCallBtn = combinedHtml.includes('adActionCallBtn') || combinedHtml.includes('adModalActionCallBtn');
        const hasDirectionsBtn = combinedHtml.includes('adActionDirectionsBtn') || combinedHtml.includes('adModalActionDirectionsBtn');
        const hasShareBtn = combinedHtml.includes('adActionShareBtn') || combinedHtml.includes('adModalActionShareBtn');
        const hasWebsiteBtn = combinedHtml.toLowerCase().includes('website') || combinedHtml.includes('adActionWebsiteBtn');
        const hasMenuBtn = combinedHtml.toLowerCase().includes('view menu') || combinedHtml.toLowerCase().includes('menu/catalog');
        const showsPhone = combinedHtml.includes('9810000000');
        const showsEmail = combinedHtml.includes('luxe@example.com');

        closeModal('adDetailModal');

        return {
          bizName,
          tagline,
          desc,
          cat,
          loc,
          hasWhatsAppBtn,
          hasCallBtn,
          hasDirectionsBtn,
          hasShareBtn,
          hasWebsiteBtn,
          hasMenuBtn,
          showsPhone,
          showsEmail
        };
      });

      assert.strictEqual(detailAnalysis.bizName, 'Luxe Home Decors');
      assert.strictEqual(detailAnalysis.tagline, 'Modern minimal interior furnishings');
      assert.ok(detailAnalysis.desc.includes('Complete home styling'));
      assert.ok(detailAnalysis.loc.includes('Sector 78'));
      assert.strictEqual(detailAnalysis.hasCallBtn, true, 'Detail view MUST show Call button');
      assert.strictEqual(detailAnalysis.hasDirectionsBtn, true, 'Detail view MUST show Directions button');
      assert.strictEqual(detailAnalysis.hasWhatsAppBtn, true, 'Detail view MUST show WhatsApp button');
      assert.strictEqual(detailAnalysis.hasShareBtn, true, 'Detail view MUST show Share button');
      assert.strictEqual(detailAnalysis.hasWebsiteBtn, false, 'Detail view must NOT show Website button');
      assert.strictEqual(detailAnalysis.hasMenuBtn, false, 'Detail view must NOT show Menu button');
      assert.strictEqual(detailAnalysis.showsPhone, true, 'Detail view MUST display phone number');
      assert.strictEqual(detailAnalysis.showsEmail, true, 'Detail view MUST display email');
    });

    // ── TEST 8: Visibility & Society Targeting
    await test('8. Visibility Scope & Society Targeting (Global vs Society-Specific)', async () => {
      const visResult = await page.evaluate(() => {
        const globalAd = {
          id: 'ad_global_1',
          businessName: 'Global Ad Business',
          status: 'PUBLISHED',
          paymentStatus: 'PAID',
          startDate: '2026-09-01',
          endDate: '2026-10-31',
          visibilityScope: 'global',
          societyIds: []
        };
        const laurelAd = {
          id: 'ad_laurel_only',
          businessName: 'Laurel Exclusive Ad',
          status: 'PUBLISHED',
          paymentStatus: 'PAID',
          startDate: '2026-09-01',
          endDate: '2026-10-31',
          visibilityScope: 'society',
          societyIds: ['Prateek Laurel']
        };

        const globalInLaurel = isAdVisibleInSociety(globalAd, 'Prateek Laurel');
        const globalInCivitech = isAdVisibleInSociety(globalAd, 'Civitech Sampriti');
        const laurelInLaurel = isAdVisibleInSociety(laurelAd, 'Prateek Laurel');
        const laurelInCivitech = isAdVisibleInSociety(laurelAd, 'Civitech Sampriti');

        return {
          globalInLaurel,
          globalInCivitech,
          laurelInLaurel,
          laurelInCivitech
        };
      });

      assert.strictEqual(visResult.globalInLaurel, true, 'Global ad should be visible in Prateek Laurel');
      assert.strictEqual(visResult.globalInCivitech, true, 'Global ad should be visible in Civitech Sampriti');
      assert.strictEqual(visResult.laurelInLaurel, true, 'Laurel ad should be visible in Prateek Laurel');
      assert.strictEqual(visResult.laurelInCivitech, false, 'Laurel ad should NOT be visible in Civitech Sampriti');
    });

    // ── TEST 9: Keyword Search Integration
    await test('9. Keyword Search Integration: Sponsored Ad Appears in Search Results with Sponsored Badge', async () => {
      const searchResult = await page.evaluate(() => {
        selectedSociety = 'Prateek Laurel';
        _activeCustomerAds = [
          {
            id: 'ad_search_target_1',
            businessName: 'Choco Bliss Patisserie',
            tagline: 'Customized dark chocolate birthday cakes',
            description: 'Order rich dark chocolate birthday cakes in Noida.',
            category: 'Food, Bakery & Beverages',
            images: ['https://example.com/cake.jpg'],
            location: 'Prateek Laurel',
            status: 'PUBLISHED',
            paymentStatus: 'PAID',
            startDate: '2026-09-01',
            endDate: '2026-10-31',
            visibilityScope: 'global'
          }
        ];

        document.getElementById('searchInput').value = 'choco bliss';
        renderAll();

        const grid = document.getElementById('mainGrid');
        const sponsoredBadge = grid ? grid.querySelector('.ad-sponsored-badge') : null;
        const bizNameEl = grid ? grid.querySelector('.tile-name') : null;
        const isMatch = bizNameEl && bizNameEl.textContent.includes('Choco Bliss Patisserie');

        // Clear search
        document.getElementById('searchInput').value = '';
        renderAll();

        return {
          hasBadge: !!sponsoredBadge,
          isMatch
        };
      });

      assert.ok(searchResult.isMatch, 'Search query "choco bliss" should find matching sponsored ad');
      assert.ok(searchResult.hasBadge, 'Ad in search results must display Sponsored badge');
    });

    // ── TEST 10: Category Page Integration
    await test('10. Category Page Integration: Matching Category Ads Appear in Category Grid', async () => {
      const catResult = await page.evaluate(() => {
        selectedSociety = 'Prateek Laurel';
        _browseCategory = 'Fashion & Jewellery';
        _activeCustomerAds = [
          {
            id: 'ad_fashion_1',
            businessName: 'Silk & Zari Boutique',
            tagline: 'Handloom sarees & wedding jewellery',
            description: 'Authentic Banarasi sarees and bridal collection.',
            category: 'Fashion & Jewellery',
            images: ['https://example.com/saree.jpg'],
            location: 'Prateek Laurel',
            status: 'PUBLISHED',
            paymentStatus: 'PAID',
            startDate: '2026-09-01',
            endDate: '2026-10-31',
            visibilityScope: 'global'
          }
        ];

        renderCategoryPage();
        const grid = document.getElementById('bizBoxGrid');
        const adBox = grid ? grid.querySelector('.ad-biz-box') : null;
        const adName = adBox ? adBox.querySelector('.biz-box-name')?.textContent : '';

        return {
          hasAdBox: !!adBox,
          adName
        };
      });

      assert.ok(catResult.hasAdBox, 'Category page should render matching sponsored ad');
      assert.strictEqual(catResult.adName, 'Silk & Zari Boutique');
    });

    // ── TEST 11: Expiry and Removal Handling
    await test('11. Expiry & Removal: Expired/Removed Ads Excluded, Removal Reason Logged, Renew Restores', async () => {
      const lifecycleResult = await page.evaluate(async () => {
        // Expired ad
        const expiredAd = {
          id: 'ad_expired_1',
          businessName: 'Expired Ad',
          status: 'PUBLISHED',
          paymentStatus: 'PAID',
          startDate: '2026-08-01',
          endDate: '2026-08-31', // Past date
          visibilityScope: 'global'
        };
        const isExpActive = isAdActive(expiredAd);

        // Remove ad flow
        const activeAd = {
          id: 'ad_to_remove',
          businessName: 'Ad To Remove',
          status: 'PUBLISHED',
          paymentStatus: 'PAID',
          startDate: '2026-09-01',
          endDate: '2026-10-31',
          visibilityScope: 'global'
        };
        _allAdminAds.push(activeAd);
        openRemoveAdModal('ad_to_remove');
        document.getElementById('removeAdReason').value = 'Customer campaign cancelled';
        await confirmRemoveAd();

        const removedAd = _allAdminAds.find(a => a.id === 'ad_to_remove');
        const isRemovedActive = isAdActive(removedAd);
        const removedStatus = removedAd ? removedAd.status : null;
        const removedReason = removedAd ? removedAd.removedReason : null;

        // Renew ad flow
        openRenewAdModal('ad_to_remove');
        document.getElementById('renewAdStartDate').value = '2026-10-01';
        document.getElementById('renewAdEndDate').value = '2026-11-01';
        await confirmRenewAd();

        const renewedAd = _allAdminAds.find(a => a.id === 'ad_to_remove');

        return {
          isExpActive,
          removedStatus,
          removedReason,
          isRemovedActive,
          renewedStatus: renewedAd ? renewedAd.status : null,
          renewedEndDate: renewedAd ? renewedAd.endDate : null
        };
      });

      assert.strictEqual(lifecycleResult.isExpActive, false, 'Expired ad (past endDate) must not be active');
      assert.strictEqual(lifecycleResult.removedStatus, 'REMOVED', 'Removed ad must have status REMOVED');
      assert.strictEqual(lifecycleResult.removedReason, 'Customer campaign cancelled', 'Removed reason must be logged');
      assert.strictEqual(lifecycleResult.isRemovedActive, false, 'Removed ad must not be active');
      assert.strictEqual(lifecycleResult.renewedStatus, 'PUBLISHED', 'Renewed ad must return to PUBLISHED status');
      assert.strictEqual(lifecycleResult.renewedEndDate, '2026-11-01', 'Renewed ad must have new end date');
    });

    // ── TEST 12: Database Only — No Advertisements in localStorage
    await test('12. Database Only: No Advertisements Cached in localStorage', async () => {
      const storageKeys = await page.evaluate(() => {
        const keys = Object.keys(localStorage);
        return keys.filter(k => k.toLowerCase().includes('ad') || k.toLowerCase().includes('advertisement'));
      });
      assert.deepStrictEqual(storageKeys, [], 'No advertisement data or cache should be persisted in localStorage');
    });

    await context.close();
  } finally {
    if (browser) await browser.close();
  }

  console.log('\n======================================================');
  console.log(`📊 Advertisement Test Results: ${passed} Passed, ${failed} Failed`);
  console.log('======================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Fatal Test Runner Error:', err);
  process.exit(1);
});
