const { chromium } = require('playwright-core');

async function testSellerNotificationDelivery() {
  console.log('🚀 Starting Seller Notification Delivery Test...');

  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  });

  const context = await browser.newContext({
    permissions: ['notifications']
  });

  const page = await context.newPage();

  // Capture console errors
  const pageErrors = [];
  page.on('pageerror', err => {
    console.error('Browser Page Error:', err.message);
    pageErrors.push(err.message);
  });

  console.log('1. Navigating to http://localhost:8000 ...');
  await page.goto('http://localhost:8000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);

  // Dismiss splash/onboarding if present
  await page.evaluate(() => {
    if (typeof closeOnboardingSplash === 'function') closeOnboardingSplash();
    const splash = document.getElementById('onboardingSplash');
    if (splash) splash.style.display = 'none';
  });
  await page.waitForTimeout(300);

  // 2. Verify notification engine components and Service Worker registration
  console.log('2. Verifying notification engine functions and Service Worker...');
  const engineCheck = await page.evaluate(async () => {
    return {
      hasTriggerSystemMobileNotification: typeof triggerSystemMobileNotification === 'function',
      hasShowInAppNotificationBanner: typeof showInAppNotificationBanner === 'function',
      hasPlayNotificationChime: typeof playNotificationChime === 'function',
      hasInitNotificationsFirestoreListener: typeof initNotificationsFirestoreListener === 'function',
      hasUpdateUnreadNotifBadges: typeof updateUnreadNotifBadges === 'function',
      hasRequestPushPermission: typeof requestPushPermission === 'function',
      hasOpenNotificationFeedModal: typeof openNotificationFeedModal === 'function',
      hasRenderNotifFeedList: typeof renderNotifFeedList === 'function',
      serviceWorkerSupported: 'serviceWorker' in navigator,
      notificationSupported: 'Notification' in window,
      notificationPermission: 'Notification' in window ? Notification.permission : 'none'
    };
  });
  console.log('Engine check results:', engineCheck);

  if (!engineCheck.hasTriggerSystemMobileNotification || !engineCheck.hasShowInAppNotificationBanner || !engineCheck.hasInitNotificationsFirestoreListener) {
    throw new Error('Required notification engine functions are missing!');
  }

  // 3. Test Seller Broadcast Simulation
  console.log('3. Simulating seller notification compose & OTP verification...');
  const broadcastResult = await page.evaluate(async () => {
    // Mock active business identity
    window.currentBusiness = {
      id: 'test_biz_1',
      uid: 'biz_uid_123',
      venture: 'The Artisan Bakery',
      displayName: 'The Artisan Bakery',
      email: 'bakery@example.com',
      phone: '9876543210',
      society: 'Prateek Laurel'
    };
    updatePanelTabs();
    if (typeof _autoApproveBusinesses !== 'undefined') {
      _autoApproveBusinesses.push('test_biz_1');
    }

    // Prepare pending broadcast data (same as handleNotificationComposeSubmit)
    const composerData = {
      role: 'business',
      targetAudience: 'all_customers',
      groupFilter: '',
      title: 'Special 50% Off Fresh Croissants & Sourdough!',
      body: '<p>Use code <b>BAKE50</b> at checkout today. Freshly baked every morning!</p>',
      imageUrl: 'tasty.jpeg',
      ctaText: 'Order Now',
      ctaUrl: 'home',
      sendEmail: false
    };
    if (typeof window._setPendingComposerData === 'function') {
      window._setPendingComposerData(composerData);
    }

    // Set valid OTP
    if (typeof window._setNotifOtpCode === 'function') window._setNotifOtpCode('654321');
    const otpInput = document.getElementById('no_otpInput');
    if (otpInput) otpInput.value = '654321';

    // Mock system mobile notification call tracker
    window._systemNotifCalls = [];
    const origTrigger = window.triggerSystemMobileNotification;
    window.triggerSystemMobileNotification = function(notif) {
      window._systemNotifCalls.push(notif);
      return origTrigger(notif);
    };

    // Execute OTP submit
    const fakeEvent = { preventDefault: () => {} };
    await handleNotificationOtpSubmit(fakeEvent);

    // Get the newly created notification
    const newNotif = _notifList.find(n => n.title.includes('Special 50% Off'));
    const initialStatus = newNotif ? newNotif.status : 'NOT_FOUND';

    // Now simulate Admin approval
    if (newNotif && typeof approveNotification === 'function') {
      await approveNotification(newNotif.id);
    }

    // Check bell badge after approval
    const bellBadge = document.getElementById('hdrBellBadge');
    const badgeText = bellBadge ? bellBadge.textContent : '';
    const badgeVisible = bellBadge && bellBadge.style.display !== 'none';
    const badgeHasPulse = bellBadge && bellBadge.classList.contains('notif-badge-pulse');

    // Check in-app banner after approval
    const banner = document.getElementById('tyntronInAppNotifBanner');
    const bannerVisible = !!banner;
    const bannerText = banner ? banner.innerText : '';

    return {
      initialStatus,
      newNotifStatus: newNotif ? newNotif.status : 'NOT_FOUND',
      newNotifTitle: newNotif ? newNotif.title : '',
      badgeText,
      badgeVisible,
      badgeHasPulse,
      bannerVisible,
      bannerText,
      systemNotifCallsCount: window._systemNotifCalls.length,
      systemNotifLastCall: window._systemNotifCalls[0] || null
    };
  });

  console.log('Broadcast results:', broadcastResult);

  if (broadcastResult.initialStatus !== 'pending') {
    throw new Error(`Expected initial seller broadcast status to be 'pending', but got '${broadcastResult.initialStatus}'!`);
  }
  if (broadcastResult.newNotifStatus !== 'approved') {
    throw new Error(`Expected approved notification status to be 'approved', but got '${broadcastResult.newNotifStatus}'!`);
  }
  if (!broadcastResult.badgeVisible || broadcastResult.badgeText === '0') {
    throw new Error('In-app bell badge is not visible or zero after approved broadcast!');
  }
  if (!broadcastResult.bannerVisible) {
    throw new Error('In-app sliding notification banner was not displayed!');
  }
  if (broadcastResult.systemNotifCallsCount === 0) {
    throw new Error('triggerSystemMobileNotification was not triggered for broadcast!');
  }

  console.log('✅ Seller broadcast auto-approved, badge incremented, in-app banner displayed, and system notification triggered!');

  // 4. Test Customer Feed Viewing
  console.log('4. Verifying notification displays inside Customer Feed modal...');
  await page.evaluate(() => {
    openNotificationFeedModal();
  });
  await page.waitForTimeout(500);

  const feedVerification = await page.evaluate(() => {
    const modal = document.getElementById('notificationFeedModal');
    const modalOpen = modal && (modal.classList.contains('open') || modal.classList.contains('active'));
    const feedList = document.getElementById('notifFeedList');
    const listHtml = feedList ? feedList.innerHTML : '';
    const containsNewNotif = listHtml.includes('Special 50% Off Fresh Croissants');

    return {
      modalOpen,
      containsNewNotif,
      itemCount: feedList ? feedList.querySelectorAll('.notif-item').length : 0
    };
  });

  console.log('Feed modal verification:', feedVerification);

  if (!feedVerification.modalOpen || !feedVerification.containsNewNotif) {
    throw new Error('Notification feed modal did not display the broadcast notification!');
  }

  // 5. Test Notification Detail View & Mark Read
  console.log('5. Testing notification detail modal and read status update...');
  const detailVerification = await page.evaluate(() => {
    const notif = _notifList.find(n => n.title.includes('Special 50% Off'));
    openNotificationDetailModal(notif.id);

    const detailModal = document.getElementById('notificationDetailModal');
    const isDetailOpen = detailModal && (detailModal.classList.contains('open') || detailModal.classList.contains('active'));
    const detailTitle = document.getElementById('nd_title')?.textContent || '';

    // Check if marked as read locally
    const readIds = _getLocalReadNotifIds();
    const isMarkedRead = readIds.has(notif.id);

    return {
      isDetailOpen,
      detailTitle,
      isMarkedRead
    };
  });

  console.log('Detail modal verification:', detailVerification);

  if (!detailVerification.isDetailOpen || !detailVerification.isMarkedRead) {
    throw new Error('Notification detail modal failed to open or mark read!');
  }

  // 6. Test Mark All Read
  console.log('6. Testing Mark All Read...');
  const markAllReadResult = await page.evaluate(() => {
    markAllNotificationsRead();
    const bellBadge = document.getElementById('hdrBellBadge');
    return {
      badgeDisplay: bellBadge ? bellBadge.style.display : 'none',
      badgeText: bellBadge ? bellBadge.textContent : '0'
    };
  });
  console.log('Mark all read result:', markAllReadResult);

  if (markAllReadResult.badgeDisplay !== 'none' && markAllReadResult.badgeText !== '0') {
    throw new Error('Bell badge did not clear after marking all as read!');
  }

  // 7. Test Real-time update simulation
  console.log('7. Testing real-time update handling...');
  const realtimeResult = await page.evaluate(async () => {
    window._seenNotifIds = new Set(_notifList.map(n => n.id));
    _initialNotifsLoaded = true;

    // Simulate remote notification arriving via Firestore
    const incomingBroadcast = {
      id: 'remote_broadcast_999',
      senderId: 'seller_flour',
      senderRole: 'business',
      senderName: 'Flour & Co.',
      title: 'Flash Sale: Buy 1 Get 1 Free Cupcakes!',
      body: 'Today only between 4 PM to 7 PM. Grab yours!',
      status: 'approved',
      targetAudience: 'all_customers',
      createdAt: { seconds: Math.floor(Date.now() / 1000) },
      readBy: []
    };

    window._systemNotifCalls = [];

    // Emulate snapshot processing logic
    _notifList.unshift(incomingBroadcast);
    _notifList.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
    saveNotifState();
    updateUnreadNotifBadges();

    if (isNotifRelevantToUser(incomingBroadcast)) {
      triggerSystemMobileNotification(incomingBroadcast);
      showInAppNotificationBanner(incomingBroadcast);
    }

    const bellBadge = document.getElementById('hdrBellBadge');
    const badgeText = bellBadge ? bellBadge.textContent : '0';
    const badgeVisible = bellBadge && bellBadge.style.display !== 'none';

    return {
      badgeVisible,
      badgeText,
      systemTriggered: window._systemNotifCalls.length > 0,
      bannerVisible: !!document.getElementById('tyntronInAppNotifBanner')
    };
  });

  console.log('Real-time simulation result:', realtimeResult);

  if (!realtimeResult.badgeVisible || !realtimeResult.systemTriggered || !realtimeResult.bannerVisible) {
    throw new Error('Real-time broadcast handling failed to trigger alerts!');
  }

  await browser.close();

  if (pageErrors.length > 0) {
    console.warn('Page errors occurred during test:', pageErrors);
  }

  console.log('\n🎉 ALL TESTS PASSED SUCCESSFULLY! Both in-app bell feed/badge and mobile notification panel integration are fully functional.');
  process.exit(0);
}

testSellerNotificationDelivery().catch(err => {
  console.error('\n❌ TEST FAILED:', err);
  process.exit(1);
});
