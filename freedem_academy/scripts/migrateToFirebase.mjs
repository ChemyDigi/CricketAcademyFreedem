/**
 * Firebase Data Migration Script
 * 
 * This script migrates data from local JSON files to Firebase Firestore.
 * 
 * Usage:
 * 1. Ensure your Firebase configuration is set in .env.local
 * 2. Run: node scripts/migrateToFirebase.mjs
 * 
 * This will upload all data from:
 * - data/events.json
 * - data/blogs.json
 * - data/coaches.json
 * - data/services.json
 * 
 * to their respective collections in Firebase.
 */

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { readFileSync } from "fs";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Validate configuration
const missingVars = [];
Object.entries(firebaseConfig).forEach(([key, value]) => {
  if (!value) missingVars.push(key);
});

if (missingVars.length > 0) {
  console.error("❌ Missing Firebase configuration:");
  missingVars.forEach(v => console.error(`   - ${v}`));
  console.error("\n💡 Please set these in your .env.local file");
  process.exit(1);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to migrate a collection
async function migrateCollection(collectionName, jsonFilePath) {
  try {
    console.log(`\n📦 Migrating ${collectionName}...`);
    
    const data = JSON.parse(readFileSync(jsonFilePath, 'utf-8'));
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const item of data) {
      try {
        const docRef = doc(db, collectionName, item.id);
        await setDoc(docRef, item);
        successCount++;
        console.log(`  ✅ Added ${item.id || item.title}`);
      } catch (error) {
        errorCount++;
        console.error(`  ❌ Failed to add ${item.id}:`, error.message);
      }
    }
    
    console.log(`\n✨ ${collectionName} migration complete:`);
    console.log(`   Success: ${successCount}`);
    console.log(`   Errors: ${errorCount}`);
    
    return { success: successCount, errors: errorCount };
  } catch (error) {
    console.error(`❌ Error migrating ${collectionName}:`, error.message);
    return { success: 0, errors: 1 };
  }
}

// Main migration function
async function migrateAllData() {
  console.log("🚀 Starting Firebase Migration...");
  console.log("================================\n");
  
  const dataDir = join(__dirname, '..', 'data');
  
  const collections = [
    { name: 'events', file: join(dataDir, 'events.json') },
    { name: 'blogs', file: join(dataDir, 'blogs.json') },
    { name: 'coaches', file: join(dataDir, 'coaches.json') },
    { name: 'services', file: join(dataDir, 'services.json') },
  ];
  
  let totalSuccess = 0;
  let totalErrors = 0;
  
  for (const { name, file } of collections) {
    const result = await migrateCollection(name, file);
    totalSuccess += result.success;
    totalErrors += result.errors;
  }
  
  console.log("\n================================");
  console.log("🎉 Migration Complete!");
  console.log(`   Total Success: ${totalSuccess}`);
  console.log(`   Total Errors: ${totalErrors}`);
  console.log("================================\n");
}

// Run migration
migrateAllData()
  .then(() => {
    console.log("✅ All done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  });
