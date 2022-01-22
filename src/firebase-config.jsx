import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXrS6KP5X30KmOWuk5Qtn2sreqTtX8qGA",
  authDomain: "hackapp-50a6f.firebaseapp.com",
  projectId: "hackapp-50a6f",
  storageBucket: "hackapp-50a6f.appspot.com",
  messagingSenderId: "813001492442",
  appId: "1:813001492442:web:e92a0ab7351219955022e3",
  measurementId: "G-SQ6F12RNC6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
