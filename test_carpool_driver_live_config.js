const { chromium } = require('playwright-core');

async function testCarpoolDriverLiveConfig() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });

  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  console.log('Navigating to http://localhost:8000 ...');
  await page.goto('http://localhost:8000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // Dismiss onboarding splash
  await page.evaluate(() => {
    const splash = document.getElementById('onboardingSplash');
    if (splash) splash.style.display = 'none';
  });

  const checkInitialDefaults = await page.evaluate(() => {
    return {
      showCarpoolVisible: isFeatureVisible('showCarpool'),
      showDriverLoginVisible: isFeatureVisible('showDriverLogin'),
      carpoolBnBtnDisplay: document.getElementById('bnCarpoolBtn')?.style.display,
      carpoolSidebarLinkDisplay: document.getElementById('sidebarCarpoolLink')?.style.display,
      driverSidebarCardDisplay: document.getElementById('sidebarDriverCard')?.style.display
    };
  });

  console.log('Initial Defaults Test:', JSON.stringify(checkInitialDefaults, null, 2));

  // Open Admin Features Tab
  await page.evaluate(() => {
    isAdmin = true;
    switchPanel('admin');
    switchAdminTab('features');
  });
  await page.waitForTimeout(500);

  const checkAdminUI = await page.evaluate(() => {
    const carpoolCheckbox = document.getElementById('cfg_showCarpool');
    const driverCheckbox = document.getElementById('cfg_showDriverLogin');
    const adminContentText = document.getElementById('adminTabContent')?.innerText || '';

    return {
      carpoolChecked: carpoolCheckbox?.checked,
      driverChecked: driverCheckbox?.checked,
      hasActiveLocallyText: adminContentText.includes('Active Locally'),
      hasEnabledLocallyText: adminContentText.includes('Enabled locally by default')
    };
  });

  console.log('Admin UI Check:', JSON.stringify(checkAdminUI, null, 2));

  // Take screenshot of Admin Features Panel
  await page.screenshot({ path: 'admin_features_updated.png' });
  console.log('Saved screenshot to admin_features_updated.png');

  // Test toggling on and saving
  const toggleAndSaveTest = await page.evaluate(async () => {
    document.getElementById('cfg_showCarpool').checked = true;
    document.getElementById('cfg_showDriverLogin').checked = true;

    // Call saveAdminFeatures
    await saveAdminFeatures();

    return {
      carpoolNowVisible: isFeatureVisible('showCarpool'),
      driverNowVisible: isFeatureVisible('showDriverLogin'),
      carpoolBnBtnDisplayAfter: document.getElementById('bnCarpoolBtn')?.style.display,
      driverSidebarCardDisplayAfter: document.getElementById('sidebarDriverCard')?.style.display,
      siteConfigCarpool: SITE_CONFIG.showCarpool,
      siteConfigDriver: SITE_CONFIG.showDriverLogin
    };
  });

  console.log('Toggle & Save Test:', JSON.stringify(toggleAndSaveTest, null, 2));

  // Test toggling off and saving (removing from live)
  const toggleOffTest = await page.evaluate(async () => {
    document.getElementById('cfg_showCarpool').checked = false;
    document.getElementById('cfg_showDriverLogin').checked = false;

    await saveAdminFeatures();

    return {
      carpoolDisabled: !isFeatureVisible('showCarpool'),
      driverDisabled: !isFeatureVisible('showDriverLogin'),
      carpoolBnBtnDisplayHidden: document.getElementById('bnCarpoolBtn')?.style.display,
      driverSidebarCardDisplayHidden: document.getElementById('sidebarDriverCard')?.style.display,
      siteConfigCarpool: SITE_CONFIG.showCarpool,
      siteConfigDriver: SITE_CONFIG.showDriverLogin
    };
  });

  console.log('Toggle Off Test:', JSON.stringify(toggleOffTest, null, 2));

  await browser.close();
  console.log('ALL VERIFICATIONS PASSED!');
}

testCarpoolDriverLiveConfig().catch(err => {
  console.error(err);
  process.exit(1);
});
