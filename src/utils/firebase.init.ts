// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFVehU34Mj48Le_Y124KHtpEGiMV0r8Zs",
  authDomain: "bengal-book-catalog.firebaseapp.com",
  projectId: "bengal-book-catalog",
  storageBucket: "bengal-book-catalog.appspot.com",
  messagingSenderId: "965405223117",
  appId: "1:965405223117:web:989c72ade3a1f10314e184",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Persistence enabled
  })
  .catch((error) => {
    console.log(error);
  });

export default auth;
