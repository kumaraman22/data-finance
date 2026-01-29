// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvK6KrilxNNSEKY_-GP9dbkrvfe7xdmso",
  authDomain: "statflux-c6300.firebaseapp.com",
  projectId: "statflux-c6300",
  storageBucket: "statflux-c6300.firebasestorage.app",
  messagingSenderId: "849454457616",
  appId: "1:849454457616:web:962855b7706c4d8aa73b95",
  measurementId: "G-FT3GX81KDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);