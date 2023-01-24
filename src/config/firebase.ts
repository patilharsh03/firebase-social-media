// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVXfbup7Ffef0Wm9wzQ_rbumhQHmr4FKM",
  authDomain: "social-media-project-e5f5c.firebaseapp.com",
  projectId: "social-media-project-e5f5c",
  storageBucket: "social-media-project-e5f5c.appspot.com",
  messagingSenderId: "222623983070",
  appId: "1:222623983070:web:8a43a7cee31449ac4de94f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
