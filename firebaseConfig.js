// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBqVK9Wr2phvUdY0evbf4Z9tI5RgSDFd4",
    authDomain: "test-nextjs-2ebbb.firebaseapp.com",
    projectId: "test-nextjs-2ebbb",
    storageBucket: "test-nextjs-2ebbb.appspot.com",
    messagingSenderId: "926940495965",
    appId: "1:926940495965:web:a0a9981e04079c1b308db4",
    measurementId: "G-MVY4JHQEDJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)