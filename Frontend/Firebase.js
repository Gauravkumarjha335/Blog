// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import dotenv from 'dotenv';
// dotenv.config();
// console.log(import.meta.env.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-25cc3.firebaseapp.com",
  projectId: "blog-25cc3",
  storageBucket: "blog-25cc3.appspot.com",
  messagingSenderId: "986044563554",
  appId: "1:986044563554:web:57c920257c48ac272d513b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);