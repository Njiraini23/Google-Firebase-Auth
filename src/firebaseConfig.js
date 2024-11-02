import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD3FN-tTwqVEx214iL0C2SodLHdlEhocAA",
  authDomain: "react-firebase-auth-d90ef.firebaseapp.com",
  projectId: "react-firebase-auth-d90ef",
  storageBucket: "react-firebase-auth-d90ef.firebasestorage.app",
  messagingSenderId: "570238267352",
  appId: "1:570238267352:web:0cd21f97145d6691a80cad",
  measurementId: "G-2W9D2NDCY1"
};

const app =initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 