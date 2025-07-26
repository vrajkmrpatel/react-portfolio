// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRTUNQ-D3Z_LT3VP4weAIIwVLZWs_lpq4",
  authDomain: "portfolio-visitor-count-71104.firebaseapp.com",
  databaseURL: "https://portfolio-visitor-count-71104-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-visitor-count-71104",
  storageBucket: "portfolio-visitor-count-71104.firebasestorage.app",
  messagingSenderId: "958479700276",
  appId: "1:958479700276:web:d7504fa1ead822a9489561"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get, set };
