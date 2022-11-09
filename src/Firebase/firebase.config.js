// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBtiI151qFH-pexC7Qwho0aRKqyv_8pDE",
  authDomain: "rakibs-photography.firebaseapp.com",
  projectId: "rakibs-photography",
  storageBucket: "rakibs-photography.appspot.com",
  messagingSenderId: "604870688760",
  appId: "1:604870688760:web:a51ded9271652c7142e00d",
  measurementId: "G-0E7X7T9GBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;