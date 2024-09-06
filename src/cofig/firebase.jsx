// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDouJ1qX95_ubyeStfrjqin5ID8MvOoHHU",
  authDomain: "hassan-project-one-73985.firebaseapp.com",
  databaseURL: "https://hassan-project-one-73985-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hassan-project-one-73985",
  storageBucket: "hassan-project-one-73985.appspot.com",
  messagingSenderId: "817165793516",
  appId: "1:817165793516:web:66f7734301a45cd9820dc9",
  measurementId: "G-20BB1J76MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getFirestore(app);

export { auth, database };

