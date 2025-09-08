// Impnort the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgiVgnZg9sjGbRBW6NT9KxPkapY0XF4sA",
  authDomain: "netflix-gpt-6cd37.firebaseapp.com",
  projectId: "netflix-gpt-6cd37",
  storageBucket: "netflix-gpt-6cd37.firebasestorage.app",
  messagingSenderId: "1032533380078",
  appId: "1:1032533380078:web:42205b44a49014a4a7dcff",
  measurementId: "G-9HH66DV59J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();