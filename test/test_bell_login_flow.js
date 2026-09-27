const { chromium } = require('playwright-core');

(async () => {
  console.log('🚀 Testing Bell Click Login Flow...');
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true
  });
  const context = await browser.newContext();
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

  // 1. Click bell icon when logged out
  console.log('1. Clicking bell icon as logged-out visitor...');
  await page.evaluate(() => {
    openNotificationFeedModal();
  });
  await page.waitForTimeout(500);

  const modalState = await page.evaluate(() => {
    const authModal = document.getElementById('customerAuthModal');
    const notifModal = document.getElementById('notificationFeedModal');
    return {
      authModalOpen: authModal && (authModal.classList.contains('open') || authModal.classList.contains('active') || authModal.style.display !== 'none'),
      notifModalOpen: notifModal && (notifModal.classList.contains('open') || notifModal.classList.contains('active') && notifModal.style.display !== 'none'),
      pendingIntent: window._pendingNotifIntent
    };
  });
  console.log('Modal states after bell click:', modalState);

  if (!modalState.authModalOpen) {
    console.error('❌ Failed: Customer auth modal did not open!');
    process.exit(1);
  }
  if (modalState.notifModalOpen) {
    console.error('❌ Failed: Notification modal should NOT be open yet!');
    process.exit(1);
  }

  // 2. Simulate login completion
  console.log('2. Simulating login completion...');
  await page.evaluate(() => {
    currentCustomer = { name: 'Alice Resident', mobile: '9999988888', society: 'Prateek Laurel' };
    updatePanelTabs();
  });
  await page.waitForTimeout(600);

  const afterLoginState = await page.evaluate(() => {
    const notifModal = document.getElementById('notificationFeedModal');
    return {
      notifModalOpen: notifModal && (notifModal.classList.contains('open') || notifModal.classList.contains('active') || notifModal.style.display !== 'none'),
      pendingIntent: window._pendingNotifIntent
    };
  });
  console.log('Modal states after login:', afterLoginState);

  if (afterLoginState.notifModalOpen) {
    console.log('🎉 SUCCESS: Bell click opened Login modal, and after login it automatically revealed notifications!');
  } else {
    console.error('❌ Failed: Notification modal did not open after login');
    process.exit(1);
  }

  await browser.close();
})();
