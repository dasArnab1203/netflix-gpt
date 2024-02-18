// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf_1XF6xlGiwvorlOUQ0rxwcoLKQsF2mE",
  authDomain: "netflixgpt-ebe64.firebaseapp.com",
  projectId: "netflixgpt-ebe64",
  storageBucket: "netflixgpt-ebe64.appspot.com",
  messagingSenderId: "273795350057",
  appId: "1:273795350057:web:350df039f408ec4d7c6638",
  measurementId: "G-8NKV8H02JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();