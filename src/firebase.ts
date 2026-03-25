import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAW09ZYrWPr6dEAfCOJbw3xeR6wRNiXs9A",
  authDomain: "gobill-7ac7a.firebaseapp.com",
  projectId: "gobill-7ac7a",
  storageBucket: "gobill-7ac7a.firebasestorage.app",
  messagingSenderId: "1066377954960",
  appId: "1:1066377954960:web:b415d6beff4c452a8eba15",
  measurementId: "G-8TR8EGJHVK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;