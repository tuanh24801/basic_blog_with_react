
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzHajNhyY2N4EdySJjV9-I3b1uTeAJMKs",
  authDomain: "react-course-49bcc.firebaseapp.com",
  projectId: "react-course-49bcc",
  storageBucket: "react-course-49bcc.appspot.com",
  messagingSenderId: "339017558529",
  appId: "1:339017558529:web:2d08c83df550c485b82e00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);