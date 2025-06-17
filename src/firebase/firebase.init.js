// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJg0pPv-x9WPUCFOeL16c4_vpljSNHVXM",
  authDomain: "simple-firebase-62c8d.firebaseapp.com",
  projectId: "simple-firebase-62c8d",
  storageBucket: "simple-firebase-62c8d.firebasestorage.app",
  messagingSenderId: "509088975425",
  appId: "1:509088975425:web:c5a303a95e9720724294c0",
  measurementId: "G-QS0BQ58MQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics = getAnalytics(app);
export default auth;