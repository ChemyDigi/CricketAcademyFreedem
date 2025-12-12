# Firebase Migration Guide

## Current Issue
The migration script is receiving "PERMISSION_DENIED" errors. This is because Firebase Firestore has security rules that prevent unauthorized access.

## Solution: Update Firestore Security Rules

### Step 1: Go to Firebase Console
1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **freedem-cricket**
3. Click on **Firestore Database** in the left sidebar
4. Click on the **Rules** tab

### Step 2: Update Security Rules
Replace the existing rules with the following:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all collections for everyone
    match /{document=**} {
      allow read: if true;
    }
    
    // Allow write access to events collection for everyone (temporary for migration)
    match /events/{eventId} {
      allow write: if true;
    }
    
    // Allow write access to blogs collection for everyone (temporary for migration)
    match /blogs/{blogId} {
      allow write: if true;
    }
    
    // Allow write access to coaches collection for everyone (temporary for migration)
    match /coaches/{coachId} {
      allow write: if true;
    }
    
    // Allow write access to services collection for everyone (temporary for migration)
    match /services/{serviceId} {
      allow write: if true;
    }
  }
}
```

### Step 3: Publish the Rules
Click the **Publish** button to apply the new rules.

### Step 4: Run the Migration Script
After updating the rules, run:

```bash
node scripts/uploadToFirebase.mjs
```

### Step 5: Secure Your Database (Important!)
After the migration is complete, update the security rules to be more restrictive:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all collections for everyone
    match /{document=**} {
      allow read: if true;
    }
    
    // Events - Only allow writes from authenticated admin
    match /events/{eventId} {
      allow write: if request.auth != null;
    }
    
    // Blogs - Only allow writes from authenticated admin
    match /blogs/{blogId} {
      allow write: if request.auth != null;
    }
    
    // Coaches - Only allow writes from authenticated admin
    match /coaches/{coachId} {
      allow write: if request.auth != null;
    }
    
    // Services - Only allow writes from authenticated admin
    match /services/{serviceId} {
      allow write: if request.auth != null;
    }
  }
}
```

## Alternative: Use Firebase Admin SDK

If you prefer not to temporarily open write access, you can use the Firebase Admin SDK with a service account:

1. Go to Firebase Console → Project Settings → Service Accounts
2. Click "Generate new private key"
3. Save the JSON file securely
4. Update the migration script to use Admin SDK instead of Client SDK

## After Migration

Once the data is successfully migrated:
1. ✅ Verify all data in Firebase Console
2. ✅ Update security rules to be restrictive
3. ✅ Test the website to ensure data is loading correctly
4. ✅ Consider removing or backing up the JSON files from the data folder

## Troubleshooting

### Still getting permission errors?
- Wait 1-2 minutes after publishing rules for them to propagate
- Clear your browser cache
- Verify the rules are published in Firebase Console

### Data not showing on website?
- Check browser console for errors
- Verify Firebase config in `.env.local` file
- Ensure all environment variables start with `NEXT_PUBLIC_`

### Admin panel not working?
- Set the `ADMIN_PASSWORD` environment variable in `.env.local`
- Restart the development server after changing environment variables
