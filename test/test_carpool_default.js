const { chromium } = require('playwright-core');

async function testCarpoolDefaults() {
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  });

  const page = await browser.newPage();
  console.log('Navigating to http://localhost:8000 ...');
  await page.goto('http://localhost:8000', { waitUntil: 'domcontentloaded' });

  // Wait for config loading & dismiss onboarding splash if shown
  await page.waitForTimeout(1000);
  await page.evaluate(() => {
    if (typeof closeOnboardingSplash === 'function') closeOnboardingSplash();
    const splash = document.getElementById('onboardingSplash');
    if (splash) splash.style.display = 'none';
  });
  await page.waitForTimeout(300);

  const results = await page.evaluate(() => {
    const isCarpoolVisible = isFeatureVisible('showCarpool');
    const isDriverLoginVisible = isFeatureVisible('showDriverLogin');

    const bnCarpoolBtn = document.getElementById('bnCarpoolBtn');
    const sidebarCarpoolLink = document.getElementById('sidebarCarpoolLink');
    const sidebarDriverCard = document.getElementById('sidebarDriverCard');

    return {
      isCarpoolVisible,
      isDriverLoginVisible,
      bnCarpoolDisplay: bnCarpoolBtn ? window.getComputedStyle(bnCarpoolBtn).display : 'missing',
      sidebarCarpoolDisplay: sidebarCarpoolLink ? window.getComputedStyle(sidebarCarpoolLink).display : 'missing',
      sidebarDriverDisplay: sidebarDriverCard ? window.getComputedStyle(sidebarDriverCard).display : 'missing',
    };
  });

  console.log('Feature test results on localhost:8000:', results);

  // Test navigation to carpool
  await page.click('#bnCarpoolBtn');
  await page.waitForTimeout(500);

  const carpoolPageVisible = await page.evaluate(() => {
    const p = document.getElementById('customerCarpoolPage');
    return p && window.getComputedStyle(p).display !== 'none';
  });
  console.log('Carpool page visible after clicking bottom nav button:', carpoolPageVisible);

  // Open admin settings modal and check the checkboxes
  await page.evaluate(() => {
    const content = document.createElement('div');
    renderAdminFeatures(content);
    document.body.appendChild(content);
  });

  const checkboxStates = await page.evaluate(() => {
    const carpoolBox = document.getElementById('cfg_showCarpool');
    const driverBox = document.getElementById('cfg_showDriverLogin');
    return {
      carpoolChecked: carpoolBox ? carpoolBox.checked : null,
      driverChecked: driverBox ? driverBox.checked : null,
    };
  });
  console.log('Admin settings checkbox states:', checkboxStates);

  // Test live domain simulation (where hostname is NOT localhost and DB has false)
  const simulatedLiveResult = await page.evaluate(() => {
    const originalLocalDev = isLocalDevEnvironment;
    const origCarpool = SITE_CONFIG.showCarpool;
    const origDriver = SITE_CONFIG.showDriverLogin;

    window.isLocalDevEnvironment = () => false;
    SITE_CONFIG.showCarpool = false;
    SITE_CONFIG.showDriverLogin = false;

    const liveCarpoolVisible = isFeatureVisible('showCarpool');
    const liveDriverVisible = isFeatureVisible('showDriverLogin');

    // Restore
    window.isLocalDevEnvironment = originalLocalDev;
    SITE_CONFIG.showCarpool = origCarpool;
    SITE_CONFIG.showDriverLogin = origDriver;

    return { liveCarpoolVisible, liveDriverVisible };
  });
  console.log('Simulated live domain results (when isLocalDevEnvironment is false):', simulatedLiveResult);

  await browser.close();

  if (results.isCarpoolVisible && results.isDriverLoginVisible && carpoolPageVisible && checkboxStates.carpoolChecked && checkboxStates.driverChecked && !simulatedLiveResult.liveCarpoolVisible && !simulatedLiveResult.liveDriverVisible) {
    console.log('✅ ALL TESTS PASSED: Carpool and Driver Hub are enabled by default on local dev without database changes!');
    process.exit(0);
  } else {
    console.error('❌ SOME TESTS FAILED');
    process.exit(1);
  }
}

testCarpoolDefaults().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
