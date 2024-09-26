// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyATK6Sc83pjbMv-zxUxWtZee7IVyJT59ek",
  authDomain: "mern-sketchsymphony.firebaseapp.com",
  projectId: "mern-sketchsymphony",
  storageBucket: "mern-sketchsymphony.appspot.com",
  messagingSenderId: "790548907501",
  appId: "1:790548907501:web:61ae238c15345ad81e93e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);