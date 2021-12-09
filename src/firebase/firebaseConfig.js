import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ4s-eg2k79momuBPMLu4J60ybRnjgQXI",
  authDomain: "prueba2-392e7.firebaseapp.com",
  projectId: "prueba2-392e7",
  storageBucket: "prueba2-392e7.appspot.com",
  messagingSenderId: "973418256349",
  appId: "1:973418256349:web:34bc16a001827bc89c4834",
  measurementId: "${config.measurementId}",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
