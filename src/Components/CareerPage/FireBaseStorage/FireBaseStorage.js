// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDECLoGFXsSTD3SZhKptzW2C5d1yhvlvGs",
    authDomain: "vishesh-536e3.firebaseapp.com",
    projectId: "vishesh-536e3",
    storageBucket: "vishesh-536e3.appspot.com",
    messagingSenderId: "954852848032",
    appId: "1:954852848032:web:9c0757c7d5e3266af5f4c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseStorage = getStorage(app);
export default FirebaseStorage;