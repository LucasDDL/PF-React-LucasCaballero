// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsUXf0h3FUANVbz7ovGGbeJXFpPCWCrCU",
    authDomain: "bokita-store-fd7fd.firebaseapp.com",
    projectId: "bokita-store-fd7fd",
    storageBucket: "bokita-store-fd7fd.appspot.com",
    messagingSenderId: "936509925832",
    appId: "1:936509925832:web:c9eab758c6103c79bcf8fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);