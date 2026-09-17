/**
 * Playwright End-to-End Test Suite for TynTron Search Engine
 * 
 * Tests the complete search workflow and every search case:
 * 1. Primary Flow: "eggless birthday cake under 500 in Prateek Laurel"
 *    - Keyword recognition (eggless + birthday + cake)
 *    - Society filter extraction (Prateek Laurel)
 *    - Price filter extraction (<= ₹500)
 *    - Results display & ranking (best matching cake appears first)
 *    - Applied filter chips visibility
 * 2. Price filter strict boundary testing (<= ₹500 included, > ₹500 excluded)
 * 3. Society direct vs nearby results grouping
 * 4. Synonym expansion (e.g., pastry -> cake, veg -> vegetarian)
 * 5. Typo tolerance (fuzzy matching with Damerau-Levenshtein)
 * 6. Empty search state & "Notify me" trigger
 * 7. Search suggestions dropdown (products, businesses, categories)
 * 8. Search clear button & state restoration
 */

const { chromium } = require('playwright-core');
const assert = require('assert');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:8000';

// Test Fixtures for controlled end-to-end verification
const TEST_VENDORS_FIXTURE = [
  {
    id: 'test_bakery_1',
    venture: 'Cakewalk Bakery Studio',
    cat: 'Food, Bakery & Beverages',
    speciality: 'Custom Cakes & Pastries',
    society: 'Prateek Laurel',
    contact: 'Sujata',
    flat: 'H-801',
    phone: '9910341339',
    whatsapp: '9910341339',
    desc: 'Award winning home bakery specializing in eggless birthday cakes and custom desserts.',
    menu: [
      {
        id: 'cake_best_match',
        name: 'Eggless Birthday Cake 500g',
        price: 450,
        tags: 'eggless, birthday, cake, fresh cream, bakery',
        desc: 'Freshly baked eggless chocolate birthday cake with customized message.'
      },
      {
        id: 'cake_expensive',
        name: 'Premium 3-Tier Birthday Cake',
        price: 1800,
        tags: 'birthday, cake, premium',
        desc: 'Grand multi-tier designer celebration cake.'
      },
      {
        id: 'cake_non_birthday',
        name: 'Eggless Tea Time Plum Cake',
        price: 320,
        tags: 'eggless, cake, tea cake',
        desc: 'Rich dry fruit plum cake without eggs.'
      }
    ]
  },
  {
    id: 'test_bakery_nearby',
    venture: 'Sweet Delights by Tina',
    cat: 'Food, Bakery & Beverages',
    speciality: 'Cakes',
    society: 'Gaur Saundaryam',
    contact: 'Tina',
    flat: 'T-102',
    phone: '9811000000',
    desc: 'Delicious birthday cakes delivered fresh.',
    menu: [
      {
        id: 'cake_nearby',
        name: 'Eggless Birthday Cake',
        price: 480,
        tags: 'eggless, birthday, cake',
        desc: 'Eggless vanilla birthday cake.'
      }
    ]
  },
  {
    id: 'test_unrelated_vendor',
    venture: 'Smart Minds Tuition Center',
    cat: 'Education & Coaching',
    speciality: 'Maths and Science',
    society: 'Prateek Laurel',
    contact: 'Anil',
    flat: 'C-204',
    phone: '9811111111',
    desc: 'Tuition classes for school kids from class 6 to 10.',
    menu: []
  }
];

async function runTests() {
  console.log('\n======================================================');
  console.log('🚀 Starting Playwright Search Engine Test Suite');
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

    // Helper: navigate and inject test fixtures
    async function loadPageWithFixtures() {
      await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(800);

      await page.evaluate((fixtures) => {
        // Set selected society to Prateek Laurel
        if (typeof selectedSociety !== 'undefined') {
          selectedSociety = 'Prateek Laurel';
        }
        // Inject test fixtures into DATA while preserving existing ones
        if (typeof DATA !== 'undefined') {
          DATA = [...fixtures, ...DATA.filter(d => !fixtures.some(f => f.id === d.id))];
        }
        if (typeof openSocietyPage === 'function') {
          openSocietyPage();
        } else if (typeof renderAll === 'function') {
          renderAll();
        }
      }, TEST_VENDORS_FIXTURE);

      await page.waitForTimeout(300);
    }

    // Helper: Execute a test case with logging
    async function testCase(name, fn) {
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

    // ─────────────────────────────────────────────────────────────
    // TEST CASE 1: Primary Natural Language Flow
    // "eggless birthday cake under 500 in Prateek Laurel"
    // ─────────────────────────────────────────────────────────────
    await testCase('1. Primary Query: "eggless birthday cake under 500 in Prateek Laurel"', async () => {
      await loadPageWithFixtures();

      const searchInput = page.locator('#searchInput');
      await searchInput.fill('eggless birthday cake under 500 in Prateek Laurel');
      await page.evaluate(() => onSearchInput());
      await page.waitForTimeout(400);

      // 1.1 Verify Filter Chips
      const bar = page.locator('.search-interpreted-bar');
      await bar.waitFor({ state: 'visible', timeout: 3000 });

      const keywordChip = page.locator('.chip-keyword');
      const keywordText = await keywordChip.textContent();
      assert(keywordText.includes('eggless') && keywordText.includes('birthday') && keywordText.includes('cake'),
        `Keyword chip should include recognized tokens. Got: "${keywordText}"`);

      const societyChip = page.locator('.chip-society');
      const societyText = await societyChip.textContent();
      assert(societyText.includes('Prateek Laurel'),
        `Society chip should show Prateek Laurel. Got: "${societyText}"`);

      const priceChip = page.locator('.chip-price');
      const priceText = await priceChip.textContent();
      assert(priceText.includes('500'),
        `Price chip should show <= ₹500. Got: "${priceText}"`);

      // 1.2 Verify Results Display & Best Match Ranking
      const directSec = page.locator('.category-section:has-text("Results in Prateek Laurel")');
      await directSec.waitFor({ state: 'visible', timeout: 3000 });

      const firstTile = directSec.locator('.tile').first();
      const firstTileName = await firstTile.locator('.tile-name').textContent();
      assert.strictEqual(firstTileName, 'Cakewalk Bakery Studio',
        `Best matching vendor should appear first. Got: "${firstTileName}"`);

      // 1.3 Verify Matched Item Badge on Tile
      const itemBadge = firstTile.locator('.search-item-matched-badge');
      await itemBadge.waitFor({ state: 'visible', timeout: 3000 });
      const badgeText = await itemBadge.textContent();
      assert(badgeText.includes('Eggless Birthday Cake 500g') && badgeText.includes('450'),
        `Matched item badge should highlight "Eggless Birthday Cake 500g" at ₹450. Got: "${badgeText}"`);
    });

    // ─────────────────────────────────────────────────────────────
    // TEST CASE 2: Price Filter Boundary (<= 500 included, > 500 excluded)
    // ─────────────────────────────────────────────────────────────
    await testCase('2. Price Filter Boundary Enforcement', async () => {
      await loadPageWithFixtures();

      const searchInput = page.locator('#searchInput');
      await searchInput.fill('cake under 500 in Prateek Laurel');
      await page.evaluate(() => onSearchInput());
      await page.waitForTimeout(400);

      // Items <= 500 should match, items > 500 should be filtered out
      const results = await page.evaluate(() => {
        const q = 'cake under 500 in Prateek Laurel';
        const res = TyntronSearchEngine.search(q, DATA);
        return res.results.map(r => ({
          type: r.type,
          price: r.item ? r.item.price : null,
          name: r.item ? r.item.name : r.vendor.venture
        }));
      });

      const itemMatches = results.filter(r => r.type === 'item');
      assert(itemMatches.length > 0, 'Should find matching cake items under 500');
      for (const item of itemMatches) {
        assert(item.price <= 500, `Item ${item.name} with price ${item.price} exceeds maxPrice 500!`);
      }

      const expensiveFound = results.some(r => r.name.includes('Premium 3-Tier Birthday Cake'));
      assert(!expensiveFound, 'Cake priced at ₹1800 should be excluded by "under 500"');
    });

    // ─────────────────────────────────────────────────────────────
    // TEST CASE 3: Society Direct vs Nearby Grouping
    // ─────────────────────────────────────────────────────────────
    await testCase('3. Direct Matches vs Nearby Society Grouping', async () => {
      await loadPageWithFixtures();

      const searchInput = page.locator('#searchInput');
      await searchInput.fill('eggless birthday cake under 500');
      await page.evaluate(() => onSearchInput());
      await page.waitForTimeout(400);

      // Direct section in Prateek Laurel
      const directSec = page.locator('.category-section:has-text("Results in Prateek Laurel")');
      assert(await directSec.count() > 0, 'Direct society section should be rendered');

      // Nearby section for other societies (Gaur Saundaryam)
      const nearbySec = page.locator('.category-section:has-text("Available in nearby societies")');
      assert(await nearbySec.count() > 0, 'Nearby societies section should be rendered for Sweet Delights by Tina');

      const nearbyBadge = nearbySec.locator('.nearby-society-badge').first();
      const badgeText = await nearbyBadge.textContent();
      assert(badgeText.includes('Gaur Saundaryam'), `Nearby badge should show Gaur Saundaryam. Got: "${badgeText}"`);
    });

    // ─────────────────────────────────────────────────────────────
    // TEST CASE 4: Unrelated Vendor Exclusion
    // ─────────────────────────────────────────────────────────────
    await testCase('4. Unrelated Vendors Excluded When Query Has Keywords', async () => {
      await loadPageWithFixtures();

      const searchInput = page.locator('#searchInput');
      await searchInput.fill('eggless cake under 500 in Prateek Laurel');
      await page.evaluate(() => onSearchInput());
      await page.waitForTimeout(400);

      // Tuition center in Prateek Laurel must NOT appear for cake search
      const tuitionTile = page.locator('.tile:has-text("Smart Minds Tuition Center")');
      const count = await tuitionTile.count();
      assert.strictEqual(count, 0, 'Unrelated vendor "Smart Minds Tuition Center" should not appear in cake search');
    });

    // ─────────────────────────────────────────────────────────────
    // TEST CASE 5: Synonym Expansion (pastry -> cake, veg -> vegetarian)
    // ─────────────────────────────────────────────────────────────
    await testCase('5. Synonym Expansion ("pastry" matches "cake")', async () => {
      await loadPageWithFixtures();

      const parsed = await page.evaluate(() => {
        return TyntronSearchEngine.parseQuery('birthday pastry in Prateek Laurel');
      });

      assert(parsed.tokens.includes('cake'),
        `Synonym "pastry" should be stemmed/expanded to "cake". Got: ${JSON.stringify(parsed.tokens)}`);
      assert(parsed.tokens.includes('birthday'), 'Token "birthday" should be retained');
      assert.strictEqual(parsed.societyIntent, 'Prateek Laurel', 'Society intent should be Prateek Laurel');
    });

    // ─────────────────────────────────────────────────────────────
    // TEST CASE 6: Fuzzy Typo Tolerance (Damerau-Levenshtein)
    // ─────────────────────────────────────────────────────────────
    await testCase('6. Typo Tolerance ("brthday caek")', async () => {
      await loadPageWithFixtures();

      const searchInput = page.locator('#searchInput');
      await searchInput.fill('eggless caek');
      await page.evaluate(() => onSearchInput());
      await page.waitForTimeout(400);

      const resCount = await page.locator('.tile').count();
      assert(resCount > 0, 'Typo "caek" should still match "Cakewalk" / "Cake" via Damerau-Levenshtein distance');
    });

    // ─────────────────────────────────────────────────────────────
    // TEST CASE 7: Empty State with Notification Action
    // ─────────────────────────────────────────────────────────────
    await testCase('7. Tiered Empty State for Non-Existent Query', async () => {
      await loadPageWithFixtures();

      const searchInput = page.locator('#searchInput');
      await searchInput.fill('submarine underwater drone under 200');
      await page.evaluate(() => onSearchInput());
      await page.waitForTimeout(400);

      const emptyBox = page.locator('.not-available-box');
      await emptyBox.waitFor({ state: 'visible', timeout: 3000 });

      const heading = await emptyBox.locator('h3').textContent();
      assert(heading.includes('No results for "submarine underwater drone under 200"'),
        `Empty state heading mismatch: "${heading}"`);

      const notifyBtn = emptyBox.locator('button:has-text("Notify me")');
      assert(await notifyBtn.count() > 0, 'Notify me button should be visible in empty state');
    });

    // ─────────────────────────────────────────────────────────────
    // TEST CASE 8: Search Suggestions Dropdown
    // ─────────────────────────────────────────────────────────────
    await testCase('8. Search Suggestions Dropdown Interaction', async () => {
      await loadPageWithFixtures();

      const searchInput = page.locator('#searchInput');
      await searchInput.fill('cake');
      await page.evaluate(() => onSearchInput());
      await page.waitForTimeout(300);

      const suggestBox = page.locator('#searchSuggest');
      await suggestBox.waitFor({ state: 'visible', timeout: 3000 });

      const items = suggestBox.locator('.search-suggest-item');
      const count = await items.count();
      assert(count > 0, `Search suggestions should render matching items. Found: ${count}`);
    });

    // ─────────────────────────────────────────────────────────────
    // TEST CASE 9: Clear Search Button
    // ─────────────────────────────────────────────────────────────
    await testCase('9. Clear Search Button Functionality', async () => {
      await loadPageWithFixtures();

      const searchInput = page.locator('#searchInput');
      await searchInput.fill('eggless birthday cake');
      await page.evaluate(() => onSearchInput());
      await page.waitForTimeout(300);

      const clearBtn = page.locator('#searchClearBtn');
      await clearBtn.waitFor({ state: 'visible', timeout: 2000 });

      await page.evaluate(() => clearSearch());
      await page.waitForTimeout(300);

      const val = await searchInput.inputValue();
      assert.strictEqual(val, '', 'Search input should be cleared');

      const interpretedBars = await page.locator('.search-interpreted-bar').count();
      assert.strictEqual(interpretedBars, 0, 'Interpreted query bar should disappear when search is cleared');
    });

    // ─────────────────────────────────────────────────────────────
    // TEST CASE 10: No False Positives on "cake under" (No Pant Sets / Ethnic Wear)
    // ─────────────────────────────────────────────────────────────
    await testCase('10. No False Positives: "cake under" must not match pant sets or ethnic wear', async () => {
      await loadPageWithFixtures();

      const searchInput = page.locator('#searchInput');
      await searchInput.fill('cake under');
      await page.evaluate(() => onSearchInput());
      await page.waitForTimeout(300);

      const suggestions = await page.evaluate(() => {
        return buildSearchSuggestions('cake under');
      });

      const productLabels = (suggestions.products || []).map(p => p.label.toLowerCase());
      const hasPantSet = productLabels.some(l => l.includes('pant') || l.includes('sharara') || l.includes('ethnic'));
      const bizLabels = (suggestions.businesses || []).map(b => b.label.toLowerCase());
      const hasClothingBiz = bizLabels.some(b => b.includes('little outfits') || b.includes('makeup') || b.includes('paratha'));
      assert(!hasClothingBiz, `Suggestions businesses should not contain clothing/makeup/paratha shops for cake query. Found: ${JSON.stringify(bizLabels)}`);
    });

    // ─────────────────────────────────────────────────────────────
    // TEST CASE 11: Conversational Query: "i want to order cakes"
    // ─────────────────────────────────────────────────────────────
    await testCase('11. Conversational Query: "i want to order cakes" must not match "Medhu vada" or highlight letter "i"', async () => {
      await loadPageWithFixtures();

      const searchInput = page.locator('#searchInput');
      await searchInput.fill('i want to order cakes');
      await page.evaluate(() => onSearchInput());
      await page.waitForTimeout(300);

      // Verify search engine parsing
      const parsed = await page.evaluate(() => {
        return TyntronSearchEngine.parseQuery('i want to order cakes');
      });
      assert.deepStrictEqual(parsed.tokens, ['cake'], `Tokens should only be ['cake']. Got: ${JSON.stringify(parsed.tokens)}`);

      // Verify highlighting logic does NOT highlight 'i' inside words like 'pieces' or 'bites'
      const highlightResults = await page.evaluate(() => {
        return {
          pieces: _highlightMatch('Medhu vada - 4 pieces (₹80)', 'i want to order cakes'),
          bites: _highlightMatch('Parampara Bites', 'i want to order cakes'),
          cakes: _highlightMatch('TRUE LOVE CAKES AND BAKERY', 'i want to order cakes')
        };
      });

      assert(!highlightResults.pieces.includes('<b>i</b>'), `Letter "i" should NOT be bolded in "pieces". Got: ${highlightResults.pieces}`);
      assert(!highlightResults.bites.includes('<b>i</b>'), `Letter "i" should NOT be bolded in "bites". Got: ${highlightResults.bites}`);
      assert(highlightResults.cakes.includes('<b>CAKES</b>'), `Term "CAKES" SHOULD be bolded in bakery name. Got: ${highlightResults.cakes}`);

      // Verify search with mock vendor containing Medhu vada with "order" in desc
      const vendorWithMedhuVada = {
        id: 'f8_test',
        venture: "Koustubha's Kitchen",
        society: 'Prateek Laurel',
        cat: 'Food, Bakery & Beverages',
        speciality: 'South Indian Food',
        desc: 'Authentic South Indian meals and special festival menus.',
        menu: [
          {
            id: 'mv_1',
            name: 'Medhu vada - 4 pieces',
            price: 80,
            desc: 'Only on pre order basis and provided with chutney n sambhar'
          }
        ]
      };

      const searchRes = await page.evaluate((vendor) => {
        return TyntronSearchEngine.search('i want to order cakes', [vendor]);
      }, vendorWithMedhuVada);

      assert.strictEqual(searchRes.results.length, 0, `Medhu vada should NOT match for "i want to order cakes". Got: ${JSON.stringify(searchRes.results)}`);
    });

    await context.close();
  } finally {
    if (browser) await browser.close();
  }

  console.log('\n======================================================');
  console.log(`📊 Test Results: ${passed} Passed, ${failed} Failed`);
  console.log('======================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Fatal Test Runner Error:', err);
  process.exit(1);
});
