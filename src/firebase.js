// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAXV_-vA4_wMYvNCupKCaH4XNVzQqWrLIM",
  authDomain: "nordin-blogs.firebaseapp.com",
  projectId: "nordin-blogs",
  storageBucket: "nordin-blogs.appspot.com",
  messagingSenderId: "596516100508",
  appId: "1:596516100508:web:68adb834c82a0608ac9059",
  measurementId: "G-QC5PS8E6B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app)