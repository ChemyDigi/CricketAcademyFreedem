import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "FREEDEM_CRICKET_AUTHDOMAIN",
  projectId: "FREEDEM_CRICKET_ID",
  storageBucket: "FREEDEM_CRICKET_STORAGEBUCKET",
  messagingSenderId: "FREEDEM_CRICKET_SENDERID",
  appId: "FREEDEM_CRICKET_APPID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
