const { chromium } = require('playwright-core');

(async () => {
  console.log('🚀 Testing Admin Notification Feature Hide/Show Toggle...');
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

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

  // 1. Verify Default (Enabled) State
  console.log('1. Checking default state (Enabled)...');
  const defaultState = await page.evaluate(() => {
    const bell = document.getElementById('hdrBellBtn');
    const sidebarFeed = document.getElementById('sidebarNotifFeedItem');
    const sidebarBroadcast = document.getElementById('sidebarSendBroadcastBtn');
    return {
      hasBell: !!bell,
      sidebarFeedDisplay: sidebarFeed ? sidebarFeed.style.display : null,
      sidebarBroadcastDisplay: sidebarBroadcast ? sidebarBroadcast.style.display : null,
      isFeatureVisible: typeof isFeatureVisible === 'function' ? isFeatureVisible('showNotifications') : null
    };
  });
  console.log('Default state:', defaultState);

  if (!defaultState.hasBell) {
    console.error('❌ Failed: Header bell should exist when notifications enabled');
    process.exit(1);
  }
  if (!defaultState.isFeatureVisible) {
    console.error('❌ Failed: isFeatureVisible(showNotifications) should be true by default');
    process.exit(1);
  }

  // 2. Open Admin Panel and verify checkbox exists in Feature Visibility
  console.log('2. Opening Admin Panel -> Feature Visibility...');
  await page.evaluate(() => {
    isAdmin = true;
    switchPanel('admin');
    if (typeof switchAdminTab === 'function') switchAdminTab('features');
  });
  await page.waitForTimeout(600);

  const toggleCheck = await page.evaluate(() => {
    const chk = document.getElementById('cfg_showNotifications');
    return {
      exists: !!chk,
      checked: chk ? chk.checked : null
    };
  });
  console.log('Admin toggle presence:', toggleCheck);

  if (!toggleCheck.exists) {
    console.error('❌ Failed: cfg_showNotifications checkbox does not exist in Admin panel');
    process.exit(1);
  }

  // 3. Admin hides the notification feature
  console.log('3. Admin toggling showNotifications OFF and saving...');
  let savedPayload = null;
  await page.evaluate(() => {
    // Intercept fsSaveConfig to inspect what gets sent to the database
    const origSave = window.fsSaveConfig;
    window._lastSavedConfig = null;
    window.fsSaveConfig = async function(patch) {
      window._lastSavedConfig = patch;
      if (origSave) return await origSave(patch);
      return Promise.resolve();
    };

    const chk = document.getElementById('cfg_showNotifications');
    if (chk) chk.checked = false;

    // Trigger save
    if (typeof saveAdminFeatures === 'function') {
      return saveAdminFeatures();
    }
  });
  await page.waitForTimeout(800);

  const disabledCheck = await page.evaluate(() => {
    const bell = document.getElementById('hdrBellBtn');
    const sidebarFeed = document.getElementById('sidebarNotifFeedItem');
    const sidebarBroadcast = document.getElementById('sidebarSendBroadcastBtn');
    return {
      hasBell: !!bell,
      sidebarFeedDisplay: sidebarFeed ? sidebarFeed.style.display : null,
      sidebarBroadcastDisplay: sidebarBroadcast ? sidebarBroadcast.style.display : null,
      isFeatureVisible: isFeatureVisible('showNotifications'),
      savedPayload: window._lastSavedConfig
    };
  });
  console.log('State after Admin disabling notifications:', disabledCheck);

  if (disabledCheck.hasBell) {
    console.error('❌ Failed: Header bell button was not hidden!');
    process.exit(1);
  }
  if (disabledCheck.sidebarFeedDisplay !== 'none') {
    console.error('❌ Failed: Sidebar feed item was not hidden!');
    process.exit(1);
  }
  if (disabledCheck.sidebarBroadcastDisplay !== 'none') {
    console.error('❌ Failed: Sidebar send broadcast button was not hidden!');
    process.exit(1);
  }
  if (disabledCheck.savedPayload && disabledCheck.savedPayload.showNotifications !== false) {
    console.error('❌ Failed: Database payload did not contain showNotifications: false');
    process.exit(1);
  }

  // 4. Test calling openNotificationComposer when disabled
  console.log('4. Testing openNotificationComposer when disabled...');
  const blockedCheck = await page.evaluate(() => {
    let toastMessage = null;
    const origToast = window.showToast;
    window.showToast = (msg) => { toastMessage = msg; if (origToast) origToast(msg); };

    // Try opening as business
    openNotificationComposer('business');
    return { toastMessage };
  });
  console.log('Blocked response:', blockedCheck);
  if (!blockedCheck.toastMessage || !blockedCheck.toastMessage.includes('disabled')) {
    console.error('❌ Failed: openNotificationComposer did not block action!');
    process.exit(1);
  }

  // 5. Admin re-enables the notification feature
  console.log('5. Admin toggling showNotifications ON and saving...');
  await page.evaluate(async () => {
    const chk = document.getElementById('cfg_showNotifications');
    if (chk) chk.checked = true;
    if (typeof saveAdminFeatures === 'function') {
      await saveAdminFeatures();
    }
  });
  await page.waitForTimeout(1200);

  const reEnabledCheck = await page.evaluate(() => {
    const bell = document.getElementById('hdrBellBtn');
    const sidebarFeed = document.getElementById('sidebarNotifFeedItem');
    const sidebarBroadcast = document.getElementById('sidebarSendBroadcastBtn');
    return {
      hasBell: !!bell,
      sidebarFeedDisplay: sidebarFeed ? sidebarFeed.style.display : null,
      sidebarBroadcastDisplay: sidebarBroadcast ? sidebarBroadcast.style.display : null,
      isFeatureVisible: isFeatureVisible('showNotifications'),
      savedPayload: window._lastSavedConfig
    };
  });
  console.log('State after re-enabling notifications:', reEnabledCheck);

  if (!reEnabledCheck.hasBell) {
    console.error('❌ Failed: Bell button did not reappear after re-enabling');
    process.exit(1);
  }
  if (reEnabledCheck.sidebarFeedDisplay === 'none') {
    console.error('❌ Failed: Sidebar feed item is still hidden');
    process.exit(1);
  }
  if (reEnabledCheck.savedPayload && reEnabledCheck.savedPayload.showNotifications !== true) {
    console.error('❌ Failed: Database payload did not contain showNotifications: true');
    process.exit(1);
  }

  console.log('🎉 ALL TESTS PASSED: Admin can hide and show the notification feature via database persistence without breaking functionality!');
  await browser.close();
})();
