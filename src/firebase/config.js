// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpBLPiYBT_BgZiTQpFtF0vVMXPBpxUGPA",
  authDomain: "tankshop-db.firebaseapp.com",
  projectId: "tankshop-db",
  storageBucket: "tankshop-db.firebasestorage.app",
  messagingSenderId: "309632005867",
  appId: "1:309632005867:web:1fdc52f405527c6dd230ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);