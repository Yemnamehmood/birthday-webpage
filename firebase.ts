// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARTnnf30LgeDVq25lCR97D_G26y3GMhno",
  authDomain: "birthday-webpage.firebaseapp.com",
  projectId: "birthday-webpage",
  storageBucket: "birthday-webpage.appspot.com",
  messagingSenderId: "456806684576",
  appId: "1:456806684576:web:1039f313ea7d9fd9e776c5",
  measurementId: "G-CV6V96TLQ3",
  databaseURL: "https://birthday-webpage.firebaseio.com",

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database };
