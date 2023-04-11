// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6pBfYMQzt4VgMmCsgbrofKIhx-zxx_wY",
  authDomain: "graphics-editor.firebaseapp.com",
  projectId: "graphics-editor",
  storageBucket: "graphics-editor.appspot.com",
  messagingSenderId: "1017825724494",
  appId: "1:1017825724494:web:d0188e3e2e707671e31b1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
