// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYsEFF1JaiQJ4aPMe_671UJbjzWfgPtQY",
  authDomain: "desafiofirebase1.firebaseapp.com",
  projectId: "desafiofirebase1",
  storageBucket: "desafiofirebase1.appspot.com",
  messagingSenderId: "141373928650",
  appId: "1:141373928650:web:5b829fdec1742e4a12f033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore (app)