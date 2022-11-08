// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhagvsCIyLRIQJ6LbH1xtHH-WuJdVMa1k",
  authDomain: "fruits-and-food.firebaseapp.com",
  projectId: "fruits-and-food",
  storageBucket: "fruits-and-food.appspot.com",
  messagingSenderId: "524995214544",
  appId: "1:524995214544:web:7b3180ac7135d89e3272d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;