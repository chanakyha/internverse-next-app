import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  doc,
  docs,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfm8k3IzoIsjzK0sLfeTO6wuD6AAvgDzI",
  authDomain: "internverse.firebaseapp.com",
  projectId: "internverse",
  storageBucket: "internverse.appspot.com",
  messagingSenderId: "868631716880",
  appId: "1:868631716880:web:6eed505162ad09db019695",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db, setDoc, doc, docs, collection };
