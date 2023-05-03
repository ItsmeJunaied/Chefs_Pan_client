// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD77bsX2pAnKzYS71ebd83mwx9n5mvXoMQ",
  authDomain: "food-recipe-f0c72.firebaseapp.com",
  projectId: "food-recipe-f0c72",
  storageBucket: "food-recipe-f0c72.appspot.com",
  messagingSenderId: "426473276784",
  appId: "1:426473276784:web:0466fb2e72135ead773bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;