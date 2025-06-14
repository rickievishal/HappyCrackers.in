// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs3GfmsFC48DvmZlJFlZsXnSNWhdW-bvY",
  authDomain: "happycrackers-47dfb.firebaseapp.com",
  projectId: "happycrackers-47dfb",
  storageBucket: "happycrackers-47dfb.firebasestorage.app",
  messagingSenderId: "533348544221",
  appId: "1:533348544221:web:d4ba4b163c21c3143eb534",
  measurementId: "G-BG18VSEM8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);