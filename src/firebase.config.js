import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTuhfneLuN_U0Ig4btHXvHRsm40d4IA6g",
  authDomain: "house-marketplace-app-afe2c.firebaseapp.com",
  projectId: "house-marketplace-app-afe2c",
  storageBucket: "house-marketplace-app-afe2c.appspot.com",
  messagingSenderId: "37640943806",
  appId: "1:37640943806:web:9a470a453d39de19f646ef"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()