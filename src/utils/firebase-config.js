// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBAWgsPu2Fd1ZpemfdnIq7ICKdEga3hCyo",
  authDomain: "react-netflix-clone-7f815.firebaseapp.com",
  projectId: "react-netflix-clone-7f815",
  storageBucket: "react-netflix-clone-7f815.appspot.com",
  messagingSenderId: "950511666094",
  appId: "1:950511666094:web:bb0963bf90ac77b0a53e3f",
  measurementId: "G-PR54ZEJTFM"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)