import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3PrU8WIBYlNcTgbAVZdcRH0HuEzXfMJA",
  authDomain: "learning-97e21.firebaseapp.com",
  databaseURL: "https://learning-97e21-default-rtdb.firebaseio.com",
  projectId: "learning-97e21",
  storageBucket: "learning-97e21.appspot.com",
  messagingSenderId: "15948519487",
  appId: "1:15948519487:web:20aa66b15058febef4008a",
  measurementId: "G-SJHWDTV8LZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
