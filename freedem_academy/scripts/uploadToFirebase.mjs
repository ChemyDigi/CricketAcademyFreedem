import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALl9s7OKF8to39Gqq08AC9avbn24oGwn4",
  authDomain: "freedem-cricket.firebaseapp.com",
  projectId: "freedem-cricket",
  storageBucket: "freedem-cricket.firebasestorage.app",
  messagingSenderId: "1023849541810",
  appId: "1:1023849541810:web:ab48e2895b2861027499ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to upload a collection
async function uploadCollection(collectionName, dataPath) {
  try {
    console.log(`\n📤 Uploading ${collectionName}...`);
    
    const filePath = join(__dirname, '..', 'data', dataPath);
    const data = JSON.parse(readFileSync(filePath, 'utf-8'));
    
    console.log(`   Found ${data.length} items`);
    
    for (const item of data) {
      const docRef = doc(db, collectionName, item.id);
      await setDoc(docRef, {
        ...item,
        createdAt: new Date().toISOString()
      });
      console.log(`   ✓ Uploaded ${collectionName}/${item.id}`);
    }
    
    console.log(`✅ ${collectionName} uploaded successfully!`);
    return true;
  } catch (error) {
    console.error(`❌ Error uploading ${collectionName}:`, error.message);
    return false;
  }
}

// Main migration function
async function migrateData() {
  console.log('🚀 Starting Firebase migration...\n');
  console.log('================================');
  
  const collections = [
    { name: 'events', file: 'events.json' },
    { name: 'blogs', file: 'blogs.json' },
    { name: 'coaches', file: 'coaches.json' },
    { name: 'services', file: 'services.json' }
  ];
  
  let successCount = 0;
  
  for (const { name, file } of collections) {
    const success = await uploadCollection(name, file);
    if (success) successCount++;
  }
  
  console.log('\n================================');
  console.log(`\n✨ Migration complete!`);
  console.log(`   ${successCount}/${collections.length} collections uploaded successfully`);
  
  if (successCount === collections.length) {
    console.log('\n✅ All data migrated to Firebase successfully!');
    console.log('   You can now remove the JSON files from the data folder.');
  } else {
    console.log('\n⚠️  Some collections failed to upload. Please check the errors above.');
  }
}

// Run migration
migrateData()
  .then(() => {
    console.log('\n👋 Migration script finished.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  });
