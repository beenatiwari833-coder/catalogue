const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

/**
 * Automatically triggers whenever a notification document in Firestore is created or updated.
 * When status is 'approved', it delivers a remote push notification via Firebase Cloud Messaging (FCM)
 * to all customer devices (even when the app is completely closed/killed).
 */
exports.sendPushOnNotificationApproved = functions.firestore
  .document("notifications/{notifId}")
  .onWrite(async (change, context) => {
    const after = change.after.exists ? change.after.data() : null;
    const before = change.before.exists ? change.before.data() : null;

    // Only proceed if status is 'approved'
    if (!after || after.status !== "approved") return null;

    // Avoid duplicate sending if already approved previously
    if (before && before.status === "approved") return null;

    const notifId = context.params.notifId;
    const title = after.title || "TynTron Announcement 🔔";
    const plainBody = (after.body || "").replace(/<[^>]*>?/gm, "").trim().slice(0, 160);
    const targetAudience = after.targetAudience || "all_customers";
    const targetSociety = (after.groupFilter || "").trim().toLowerCase();

    console.log(`Processing push dispatch for notification ${notifId}: "${title}"`);

    // Fetch registered customer device tokens from Firestore collection 'fcm_tokens'
    const tokensSnapshot = await admin.firestore().collection("fcm_tokens").get();
    const targetTokens = [];

    tokensSnapshot.forEach((doc) => {
      const data = doc.data();
      if (!data || !data.token) return;

      // Filter by society if this broadcast was targeted to a specific society
      if (targetAudience === "society" && targetSociety) {
        const tokenSociety = (data.society || "").trim().toLowerCase();
        if (tokenSociety === targetSociety) {
          targetTokens.push(data.token);
        }
      } else {
        // Broadcast to all customers
        targetTokens.push(data.token);
      }
    });

    if (targetTokens.length === 0) {
      console.log("No registered device tokens match target audience.");
      return null;
    }

    console.log(`Sending FCM push to ${targetTokens.length} devices...`);

    // Split into chunks of 500 (FCM sendEachForMulticast limit)
    const chunkSize = 500;
    let totalSuccess = 0;
    let totalFailure = 0;

    for (let i = 0; i < targetTokens.length; i += chunkSize) {
      const batchTokens = targetTokens.slice(i, i + chunkSize);
      const message = {
        notification: {
          title: title,
          body: plainBody,
        },
        data: {
          notifId: notifId,
          senderName: after.senderName || "TynTron",
          title: title,
          body: plainBody,
          ctaUrl: after.ctaUrl || "notifications",
        },
        android: {
          priority: "high",
          notification: {
            channelId: "default",
            sound: "default",
            clickAction: "FCM_PLUGIN_ACTIVITY",
          },
        },
        apns: {
          payload: {
            aps: {
              sound: "default",
              badge: 1,
            },
          },
        },
        tokens: batchTokens,
      };

      try {
        const response = await admin.messaging().sendEachForMulticast(message);
        totalSuccess += response.successCount;
        totalFailure += response.failureCount;

        // Clean up invalid or unregistered tokens
        if (response.failureCount > 0) {
          const deletePromises = [];
          response.responses.forEach((resp, idx) => {
            if (!resp.success) {
              const errCode = resp.error?.code;
              if (
                errCode === "messaging/invalid-registration-token" ||
                errCode === "messaging/registration-token-not-registered"
              ) {
                const badToken = batchTokens[idx];
                deletePromises.push(
                  admin.firestore().collection("fcm_tokens").doc(badToken).delete()
                );
              }
            }
          });
          await Promise.all(deletePromises);
        }
      } catch (err) {
        console.error("Batch send error:", err);
      }
    }

    console.log(`Push dispatch finished: ${totalSuccess} delivered, ${totalFailure} failed.`);
    return { successCount: totalSuccess, failureCount: totalFailure };
  });

/**
 * Scheduled job running daily to automatically transition expired advertisements to EXPIRED status.
 * Automatically checks all 'PUBLISHED' ads in Firestore where endDate has passed.
 */
exports.checkExpiredAdvertisements = functions.pubsub
  .schedule("every 24 hours")
  .onRun(async (context) => {
    const now = new Date();
    console.log(`Running scheduled advertisement expiry check at ${now.toISOString()}...`);

    const snap = await admin
      .firestore()
      .collection("advertisements")
      .where("status", "==", "PUBLISHED")
      .get();

    if (snap.empty) {
      console.log("No published advertisements found.");
      return null;
    }

    const batch = admin.firestore().batch();
    let expiredCount = 0;

    snap.forEach((doc) => {
      const data = doc.data();
      if (data && data.endDate) {
        const end = new Date(data.endDate);
        // Include full day of endDate
        end.setHours(23, 59, 59, 999);
        if (now > end) {
          batch.update(doc.ref, {
            status: "EXPIRED",
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          });
          expiredCount++;
        }
      }
    });

    if (expiredCount > 0) {
      await batch.commit();
      console.log(`Successfully transitioned ${expiredCount} expired advertisements to EXPIRED status.`);
    } else {
      console.log("All published advertisements remain valid.");
    }

    return { expiredCount };
  });

