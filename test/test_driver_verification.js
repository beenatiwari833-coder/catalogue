const { chromium } = require('playwright-core');

async function runDriverVerificationTests() {
  console.log('🚀 Starting Driver Verification & Admin Approval Test Suite...');
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  });

  const page = await browser.newPage();
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  try {
    await page.goto('http://localhost:8000', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Dismiss splash if present
    await page.evaluate(() => {
      if (typeof closeOnboardingSplash === 'function') closeOnboardingSplash();
      const splash = document.getElementById('onboardingSplash');
      if (splash) splash.style.display = 'none';

      // Mock database collection methods in memory for testing database operations
      const mockStore = {
        drivers: {},
        driver_verifications: {},
        carpool_rides: {},
        carpool_bookings: {}
      };

      const mockCollection = (colName) => {
        if (!mockStore[colName]) mockStore[colName] = {};
        return {
          doc: (docId) => ({
            get: async () => ({
              exists: !!mockStore[colName][docId],
              id: docId,
              data: () => mockStore[colName][docId] || null
            }),
            set: async (data, opts) => {
              if (opts && opts.merge && mockStore[colName][docId]) {
                mockStore[colName][docId] = { ...mockStore[colName][docId], ...data };
              } else {
                mockStore[colName][docId] = { ...data };
              }
            },
            delete: async () => {
              delete mockStore[colName][docId];
            }
          }),
          get: async () => {
            const entries = Object.entries(mockStore[colName]);
            return {
              empty: entries.length === 0,
              docs: entries.map(([id, data]) => ({
                id,
                data: () => data
              }))
            };
          }
        };
      };

      try {
        const app = firebase.app();
        const firestoreInst = firebase.firestore(app);
        firestoreInst.collection = mockCollection;
      } catch (e) {
        console.error('Failed to patch firestore instance:', e);
      }
    });
    await page.waitForTimeout(300);

    console.log('\n--- TEST 1: Driver Registration Initial Verification Status ---');
    const regResult = await page.evaluate(async () => {
      const testMobile = '9988776655';
      const testDriver = {
        name: 'Rohan Sharma',
        mobile: testMobile,
        email: 'rohan.test@tyntron.com',
        society: 'Prateek Laurel',
        address: 'Tower A-101',
        carModel: 'Hyundai Creta',
        carPlate: 'UP16-CD-1234',
        fuelType: 'petrol',
        dlNumber: 'UP16 20210045678',
        verified: false,
        docsVerified: false,
        verificationStatus: 'unverified',
        rating: null,
        ridesCompleted: 0,
        earningsTotal: 0,
        onDuty: true
      };

      await saveDriverToDatabase(testDriver);
      currentDriver = testDriver;
      localStorage.setItem('hb_driverMobile', testMobile);
      renderDriverPanel();

      return {
        isVerified: isDriverDocVerified(currentDriver),
        verStatus: currentDriver.verificationStatus,
        docsVerified: currentDriver.docsVerified,
        portalHtml: document.getElementById('driverPortalContainer')?.innerHTML || ''
      };
    });

    assert(regResult.isVerified === false, 'Newly registered driver is NOT doc verified');
    assert(regResult.verStatus === 'unverified', 'Verification status is "unverified"');
    assert(regResult.portalHtml.includes('UNVERIFIED'), 'Driver panel displays UNVERIFIED badge');
    assert(regResult.portalHtml.includes('Driver Documents &amp; Verification Required') || regResult.portalHtml.includes('Driver Documents & Verification Required'), 'Driver panel displays Action Required verification banner');

    console.log('\n--- TEST 2: Driver Submits Documents for Admin Verification ---');
    const uploadResult = await page.evaluate(async () => {
      // Simulate selecting files and filling form
      window._pendingDriverDocs = {
        cp_dl: {
          dataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
          name: 'driving_license_front.png',
          type: 'image/png'
        },
        cp_rc: {
          dataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
          name: 'vehicle_rc_card.png',
          type: 'image/png'
        }
      };

      // Set input values
      const dlIn = document.getElementById('cp_dlNumber');
      if (dlIn) dlIn.value = 'UP16 20210045678';
      const rcIn = document.getElementById('cp_rcNumber');
      if (rcIn) rcIn.value = 'UP16-CD-1234';

      // Call submit
      await saveDriverVerification();
      renderDriverPanel();

      return {
        verStatus: currentDriver.verificationStatus,
        verMethod: currentDriver.verificationMethod,
        isVerified: isDriverDocVerified(currentDriver),
        hasRequest: !!currentDriver.verificationRequest,
        reqDl: currentDriver.verificationRequest?.dlNumber,
        reqRc: currentDriver.verificationRequest?.rcNumber,
        portalHtml: document.getElementById('driverPortalContainer')?.innerHTML || ''
      };
    });

    assert(uploadResult.verStatus === 'admin_pending', 'Driver status set to "admin_pending"');
    assert(uploadResult.verMethod === 'admin_upload', 'Verification method set to "admin_upload"');
    assert(uploadResult.isVerified === false, 'Driver remains UNVERIFIED while pending');
    assert(uploadResult.hasRequest === true, 'Verification request record created');
    assert(uploadResult.reqDl === 'UP16 20210045678', 'Verification request stored correct DL number');
    assert(uploadResult.reqRc === 'UP16-CD-1234', 'Verification request stored correct RC number');
    assert(uploadResult.portalHtml.includes('VERIFICATION PENDING'), 'Driver panel shows "VERIFICATION PENDING" badge');
    assert(uploadResult.portalHtml.includes('Driver Documents Submitted — Under Admin Review'), 'Driver panel displays Under Admin Review banner');

    console.log('\n--- TEST 3: Admin Carpool Subtab Displays Pending Request ---');
    const adminViewResult = await page.evaluate(async () => {
      _adminCarpoolSubTab = 'requests';
      window._adminCarpoolReqFilter = 'all';

      const container = document.createElement('div');
      container.id = 'testAdminContainer';
      document.body.appendChild(container);

      await renderAdminCarpool(container);

      return {
        html: container.innerHTML,
        hasRohan: container.innerHTML.includes('Rohan Sharma'),
        hasPendingBadge: container.innerHTML.includes('PENDING REVIEW') || container.innerHTML.includes('PENDING'),
        hasDlProofBtn: container.innerHTML.includes('View Driving License'),
        hasRcProofBtn: container.innerHTML.includes('View Vehicle RC'),
        hasApproveBtn: container.innerHTML.includes('Approve'),
        hasRejectBtn: container.innerHTML.includes('Reject')
      };
    });

    assert(adminViewResult.hasRohan, 'Admin requests table shows driver Rohan Sharma');
    assert(adminViewResult.hasPendingBadge, 'Admin requests table shows PENDING badge');
    assert(adminViewResult.hasDlProofBtn, 'Admin requests table has "View Driving License" button');
    assert(adminViewResult.hasRcProofBtn, 'Admin requests table has "View Vehicle RC" button');
    assert(adminViewResult.hasApproveBtn, 'Admin requests table has "Approve" button');
    assert(adminViewResult.hasRejectBtn, 'Admin requests table has "Reject" button');

    console.log('\n--- TEST 4: Admin Rejects Verification with Reason ---');
    const rejectResult = await page.evaluate(async () => {
      // Stub confirmAction to return rejection reason
      const origConfirm = window.confirmAction;
      window.confirmAction = async () => ({ confirmed: true, value: 'Driving License photo is blurry and illegible' });

      await adminRejectDriverVerification('9988776655');
      renderDriverPanel();

      window.confirmAction = origConfirm;

      return {
        verStatus: currentDriver.verificationStatus,
        isVerified: isDriverDocVerified(currentDriver),
        reason: currentDriver.rejectionReason,
        portalHtml: document.getElementById('driverPortalContainer')?.innerHTML || ''
      };
    });

    assert(rejectResult.verStatus === 'rejected', 'Driver status updated to "rejected"');
    assert(rejectResult.isVerified === false, 'Driver remains unverified after rejection');
    assert(rejectResult.reason === 'Driving License photo is blurry and illegible', 'Rejection reason accurately recorded');
    assert(rejectResult.portalHtml.includes('VERIFICATION REJECTED'), 'Driver portal shows VERIFICATION REJECTED badge');
    assert(rejectResult.portalHtml.includes('Driving License photo is blurry and illegible'), 'Driver portal shows admin note reason to driver');
    assert(rejectResult.portalHtml.includes('Re-Upload Documents'), 'Driver portal shows "Re-Upload Documents" button');

    console.log('\n--- TEST 5: Admin Approves Verification ---');
    const approveResult = await page.evaluate(async () => {
      // Stub confirmAction to approve
      const origConfirm = window.confirmAction;
      window.confirmAction = async () => true;

      await adminApproveDriverVerification('9988776655');
      renderDriverPanel();

      window.confirmAction = origConfirm;

      return {
        verStatus: currentDriver.verificationStatus,
        isVerified: isDriverDocVerified(currentDriver),
        docsVerified: currentDriver.docsVerified,
        verified: currentDriver.verified,
        portalHtml: document.getElementById('driverPortalContainer')?.innerHTML || ''
      };
    });

    assert(approveResult.verStatus === 'admin_approved', 'Driver status updated to "admin_approved"');
    assert(approveResult.isVerified === true, 'Driver is now doc verified (isDriverDocVerified === true)');
    assert(approveResult.docsVerified === true, 'docsVerified set to true');
    assert(approveResult.verified === true, 'verified set to true');
    assert(approveResult.portalHtml.includes('ADMIN VERIFIED'), 'Driver portal shows official ADMIN VERIFIED badge');

    console.log('\n--- TEST 6: Dynamic DigiLocker Verification Flow ---');
    const digiResult = await page.evaluate(async () => {
      // Setup driver
      currentDriver.verificationStatus = 'unverified';
      currentDriver.docsVerified = false;
      currentDriver.verified = false;

      // Fill in Step 1
      openDigiLockerModal();
      document.getElementById('dlInputDlNumber').value = 'UP16 20220098765';
      document.getElementById('dlInputRcNumber').value = 'UP16-BW-7890';
      document.getElementById('dlInputAadhaar').value = '9988776655';
      document.getElementById('dlInputDob').value = '1995-05-15';
      document.getElementById('dlConsentCheck').checked = true;

      sendDigiLockerOtp();
      const step2Visible = document.getElementById('dlStep2').style.display !== 'none';

      // Enter OTP
      document.getElementById('dlInputOtp').value = '123456';
      verifyDigiLockerOtp();

      // Wait for mock MoRTH SARATHI fetch
      await new Promise(r => setTimeout(r, 3200));

      const step4Visible = document.getElementById('dlStep4').style.display !== 'none';
      const fetchedDl = document.getElementById('dlFetchedDlNum')?.textContent;
      const fetchedRc = document.getElementById('dlFetchedRcNum')?.textContent;
      const certToken = document.getElementById('dlFetchedCertToken')?.textContent;

      // Confirm verification
      confirmDigiLockerVerification();
      renderDriverPanel();

      return {
        step2Visible,
        step4Visible,
        fetchedDl,
        fetchedRc,
        hasCertToken: !!(certToken && certToken.includes('MORTH-SARATHI')),
        finalVerStatus: currentDriver.verificationStatus,
        finalVerMethod: currentDriver.verificationMethod,
        isVerified: isDriverDocVerified(currentDriver),
        portalHtml: document.getElementById('driverPortalContainer')?.innerHTML || ''
      };
    });

    assert(digiResult.step2Visible === true, 'DigiLocker Step 2 (OTP input) appears after Step 1');
    assert(digiResult.step4Visible === true, 'DigiLocker Step 4 (MoRTH authenticated records) appears after verification');
    assert(digiResult.fetchedDl === 'UP16 20220098765', 'DigiLocker authenticated driver inputted DL');
    assert(digiResult.fetchedRc === 'UP16-BW-7890', 'DigiLocker authenticated driver inputted RC');
    assert(digiResult.hasCertToken === true, 'MoRTH digital certificate token generated');
    assert(digiResult.finalVerStatus === 'digilocker_verified', 'Status set to "digilocker_verified"');
    assert(digiResult.finalVerMethod === 'digilocker', 'Method set to "digilocker"');
    assert(digiResult.isVerified === true, 'Driver doc verified via DigiLocker');
    assert(digiResult.portalHtml.includes('DIGILOCKER VERIFIED'), 'Driver portal displays DIGILOCKER VERIFIED badge');

    console.log('\n--- TEST 7: Document Viewer Lightbox Modal ---');
    const modalViewerResult = await page.evaluate(() => {
      openDriverDocViewer('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'Test DL Preview', 'UP16 20210045678');
      const modal = document.getElementById('driverDocViewerModal');
      const title = document.getElementById('driverDocViewerTitle')?.textContent;
      const sub = document.getElementById('driverDocViewerSubtext')?.textContent;
      const img = document.getElementById('driverDocViewerImg');
      const isImgVisible = img && img.style.display !== 'none';
      closeModal('driverDocViewerModal');

      return {
        title,
        sub,
        isImgVisible
      };
    });

    assert(modalViewerResult.title === 'Test DL Preview', 'Document lightbox shows correct document title');
    assert(modalViewerResult.sub === 'UP16 20210045678', 'Document lightbox shows correct document subtitle');
    assert(modalViewerResult.isImgVisible === true, 'Document lightbox displays image preview');

  } catch (err) {
    console.error('Test execution error:', err);
    failed++;
  } finally {
    await browser.close();
  }

  console.log(`\n========================================`);
  console.log(`Test Results: ${passed} Passed, ${failed} Failed`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runDriverVerificationTests();
