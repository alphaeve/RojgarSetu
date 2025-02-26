import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyDvMFq1qflyOxOLLyrfU8fpX4zlb3225sE",
  authDomain: "rojgarsetu-8f78d.firebaseapp.com",
  databaseURL: "https://rojgarsetu-8f78d-default-rtdb.firebaseio.com",
  projectId: "rojgarsetu-8f78d",
  storageBucket: "rojgarsetu-8f78d.appspot.com",
  messagingSenderId: "101108236048",
  appId: "1:101108236048:web:bf9c4845956b513c146f95",
  measurementId: "G-1ZY2QP9B9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
