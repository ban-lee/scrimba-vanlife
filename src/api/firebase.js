import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtHd_EH_gugWoGp0qsFozIuwIkrdDMyH4",
  authDomain: "scrimba-f23a9.firebaseapp.com",
  projectId: "scrimba-f23a9",
  storageBucket: "scrimba-f23a9.appspot.com",
  messagingSenderId: "117417706222",
  appId: "1:117417706222:web:99ce0a19507c27b0e0e9ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function getDb() {
  return db;
}
