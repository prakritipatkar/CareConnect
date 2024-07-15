import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCR8idc-cxQdVocVc8ZlLp70lrCI8I-r-0",
    authDomain: "doctor-appointment-ff7be.firebaseapp.com",
    projectId: "doctor-appointment-ff7be",
    storageBucket: "doctor-appointment-ff7be.appspot.com",
    messagingSenderId: "836272732255",
    appId: "1:836272732255:web:efdb51be2a8d89160243ea",
    measurementId: "G-LLCLFDL7R2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,db };