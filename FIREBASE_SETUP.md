# Firebase Setup Guide — Homebiz

## Step 1 — Create a Firebase project (5 min)

1. Go to https://console.firebase.google.com
2. Click **Add project** → name it `homebiz` → Continue
3. Disable Google Analytics (not needed) → Create project

## Step 2 — Enable Firestore

1. In the left sidebar: **Build → Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode** → Next
4. Pick region `asia-south1` (Mumbai) → Enable

## Step 3 — Enable Authentication

1. In the left sidebar: **Build → Authentication**
2. Click **Get started**
3. Under **Sign-in providers**, enable **Email/Password** → Save

## Step 4 — Get your config

1. In the left sidebar: Click the **gear icon ⚙** → **Project settings**
2. Scroll to **Your apps** → Click **Web** (`</>` icon) → Register app (name: `homebiz-web`)
3. On the next screen, choose **Use a `<script>` tag** (this project uses Firebase from the CDN, so this is the correct option)
4. Click **Continue to console** (or **Next** if shown)
5. Copy the `firebaseConfig` object shown — it looks like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "homebiz-xxxxx.firebaseapp.com",
  projectId: "homebiz-xxxxx",
  storageBucket: "homebiz-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Step 5 — Paste config into index.html

Open `index.html` and find this block (around line 590):

```javascript
const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  ...
};
```

Replace the placeholder values with your actual values from Step 4.

## Step 6 — Set Firestore security rules

In Firebase Console → **Firestore Database → Rules**, paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    function isSignedIn() {
      return request.auth != null;
    }

    function isOwner(uid) {
      return isSignedIn() && request.auth.uid == uid;
    }

    match /vendors/{vendorId} {
      allow read: if true;
      allow create: if isSignedIn() && request.resource.data.ownerUid == request.auth.uid;
      allow update, delete: if isSignedIn() && resource.data.ownerUid == request.auth.uid;
    }

    match /accounts/{uid} {
      allow read: if isSignedIn();
      allow create, update: if isOwner(uid);
      allow delete: if isSignedIn();
    }

    match /config/{doc} {
      allow read: if true;
      allow write: if isSignedIn();
    }

    match /stats/{vendorId} {
      allow read: if true;
      allow create, update: if isSignedIn() && request.resource.data.vendorId == vendorId;
      allow delete: if isSignedIn();
    }

    match /order_logs/{logId} {
      allow read: if isSignedIn();
      allow create: if isSignedIn();
      allow update, delete: if isSignedIn();
    }

    match /reviews/{reviewId} {
      allow read: if true;
      allow create: if true;
      allow update, delete: if isSignedIn();
    }

    match /customers/{email} {
      allow read: if isSignedIn();
      allow create, update: if isSignedIn();
      allow delete: if isSignedIn();
    }

    match /drivers/{driverId} {
      allow read, write: if true;
    }

    match /carpool_rides/{rideId} {
      allow read, write: if true;
    }

    match /carpool_bookings/{bookingId} {
      allow read, write: if true;
    }

    match /driver_verifications/{docId} {
      allow read, write: if true;
    }

    match /failure_logs/{logId} {
      allow read, write: if true;
    }
  }
}
```

Click **Publish**.

## Step 9 — Customer login (email OTP) setup

Customers verify their email with a one-time code before their first order (and can then stay logged in on that device). This reuses the EmailJS setup from the Contact Us form:

1. In Admin panel → **Site Config** → **Contact Form – EmailJS Setup**, make sure Public Key, Service ID and Template ID are filled in.
2. Optionally create a second EmailJS template dedicated to OTP emails (with a `message` or `otp_code` variable) and paste its ID into **OTP Template ID** in the same section. If left blank, OTP emails reuse the main contact template.
3. Customer profiles (name, email, mobile, address) are stored in the `customers` collection, keyed by email. Admin panel → **Customers** tab shows all registered customers with order counts and spend.
4. Mobile numbers are collected but not SMS-verified yet — that's a possible future upgrade (e.g. Firebase Phone Auth, which requires the Blaze billing plan).

## Step 7 — Migrate data

1. Open the website
2. Click **Admin** → enter password `pl2026`
3. In Admin panel → **Overview** tab → click **Migrate SEED → Firestore**
4. All 94 vendors are now in Firestore

## Step 8 — Create your first business account

1. In Admin panel → **Accounts** tab
2. Fill in Name, Email, Password, and assign a Vendor
3. Click **Create Account**
4. Share the email/password with the business

That's it! The business can now log in via **Business Login** and manage their own business.
