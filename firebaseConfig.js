// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQE4GvU5NQldWdrUhTFZr2VEENeD_MScs",
  authDomain: "rovego-e432d.firebaseapp.com",
  databaseURL: "https://rovego-e432d-default-rtdb.firebaseio.com",
  projectId: "rovego-e432d",
  storageBucket: "rovego-e432d.firebasestorage.app",
  messagingSenderId: "340128184313",
  appId: "1:340128184313:web:835895212731fa8890af28",
  measurementId: "G-KRKT4HRWKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);