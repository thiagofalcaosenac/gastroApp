// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChBlR_4d9_4fIifJ9j1fweI8VjCoXP89A",
  authDomain: "gastroapp-fe3f0.firebaseapp.com",
  projectId: "gastroapp-fe3f0",
  storageBucket: "gastroapp-fe3f0.appspot.com",
  messagingSenderId: "315722622776",
  appId: "1:315722622776:web:c31174ddcb7f54bd8943cd",
  measurementId: "G-W4S8Q1QL2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
