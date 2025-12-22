// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";   // 👈 NEW

const firebaseConfig = {
 apiKey: "AIzaSyD6Z15CTbcErCUaf1C_ZiyxlbDVj_StNS0",
  authDomain: "remingan-portfolio.firebaseapp.com",
  projectId: "remingan-portfolio",
  storageBucket: "remingan-portfolio.firebasestorage.app",
  messagingSenderId: "404261011168",
  appId: "1:404261011168:web:22ab2760ada2fd00ebda85",
  measurementId: "G-CQ7CF84LS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);   // 👈 NEW – Storage instance

export default app;
