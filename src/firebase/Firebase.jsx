// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWzvM1a8Q9f0BUMkTjAyIZFUOkQ-horxA",
  authDomain: "mymedicalarchive-dfdc1.firebaseapp.com",
  projectId: "mymedicalarchive-dfdc1",
  storageBucket: "mymedicalarchive-dfdc1.appspot.com",
  messagingSenderId: "360259063206",
  appId: "1:360259063206:web:ec45f8a6d67104d7431367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };