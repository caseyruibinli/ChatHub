// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHjpCI6Yzxip_njQPNg1RpR1sG6dkofgA",
  authDomain: "chathub-50739.firebaseapp.com",
  projectId: "chathub-50739",
  storageBucket: "chathub-50739.appspot.com",
  messagingSenderId: "641202112276",
  appId: "1:641202112276:web:618bc20f7f139b390b6401",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
