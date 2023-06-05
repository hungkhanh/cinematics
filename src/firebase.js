// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAl32BnzsYkvo7HNy1CHf-JH_Gt8wocmYs",
    authDomain: "cine-attempt.firebaseapp.com",
    projectId: "cine-attempt",
    storageBucket: "cine-attempt.appspot.com",
    messagingSenderId: "1011235509337",
    appId: "1:1011235509337:web:56e61163634c6b03a54d48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app);
export { auth, firestore, collection, doc, setDoc }