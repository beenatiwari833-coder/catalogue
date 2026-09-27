const { chromium } = require('playwright-core');

(async () => {
  console.log('🚀 Testing Notification Deletion & Direct Database Sync...');
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error' || msg.text().includes('Notification')) {
      console.log('PAGE LOG:', msg.text());
    }
  });

  await page.goto('http://localhost:8000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // 1. Verify localStorage is NOT used for notifications
  const storageCheck = await page.evaluate(() => {
    return {
      hasStorageKey: localStorage.getItem('hb_notifications') !== null,
      notifCount: typeof _notifList !== 'undefined' ? _notifList.length : -1,
      hasDeleteFunc: typeof deleteNotification === 'function'
    };
  });
  console.log('1. Storage & Engine Check:', storageCheck);

  // 2. Add a test notification into _notifList and verify render
  const testNotifId = 'test_del_' + Date.now();
  await page.evaluate((id) => {
    _notifList.unshift({
      id: id,
      title: 'Temporary Test Notice for Deletion',
      body: '<p>Delete this item</p>',
      senderName: 'Test Business',
      senderRole: 'business',
      targetAudience: 'all_customers',
      status: 'approved',
      createdAt: { seconds: Math.floor(Date.now() / 1000) }
    });
  }, testNotifId);

  // 3. Open Admin Panel -> Notifications
  await page.evaluate(() => {
    isAdmin = true;
    switchAdminTab('notifications');
  });
  await page.waitForTimeout(500);

  // Switch to History sub-tab
  await page.evaluate(() => {
    const historyBtn = Array.from(document.querySelectorAll('.notif-adm-tab')).find(b => b.textContent.includes('History'));
    if (historyBtn) historyBtn.click();
  });
  await page.waitForTimeout(500);

  // 4. Verify table headers & delete buttons
  const tableCheck = await page.evaluate(() => {
    const table = document.querySelector('#adminNotifSubContent table');
    if (!table) return { error: 'No table found' };
    const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent.trim());
    const deleteButtons = Array.from(table.querySelectorAll('button')).filter(b => b.textContent.includes('Delete'));
    return {
      headers,
      deleteButtonsCount: deleteButtons.length
    };
  });
  console.log('2. Admin Table Check:', tableCheck);

  const beforeCount = await page.evaluate(() => _notifList.length);
  console.log('3. Notifications count before deletion:', beforeCount);

  // 5. Trigger deleteNotification
  await page.evaluate(async (id) => {
    const origConfirm = confirmAction;
    confirmAction = async () => true;
    await deleteNotification(id);
    confirmAction = origConfirm;
  }, testNotifId);
  await page.waitForTimeout(500);

  // 6. Verify notification is gone and localStorage was NOT used
  const afterState = await page.evaluate((id) => {
    return {
      afterCount: _notifList.length,
      stillExists: _notifList.some(n => n.id === id),
      localStorageUsed: localStorage.getItem('hb_notifications') !== null
    };
  }, testNotifId);
  console.log('4. After Deletion State:', afterState);

  if (!afterState.stillExists && !afterState.localStorageUsed) {
    console.log('🎉 TEST PASSED: Notification successfully deleted and NO localStorage used!');
  } else {
    console.error('❌ TEST FAILED:', afterState);
    process.exit(1);
  }

  await browser.close();
})();
