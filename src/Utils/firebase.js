// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOVtKAr6CSS0liGTxHeCLvVCAEtiwCcPk",
  authDomain: "netflix-gpt-bb7c6.firebaseapp.com",
  projectId: "netflix-gpt-bb7c6",
  storageBucket: "netflix-gpt-bb7c6.appspot.com",
  messagingSenderId: "662663252557",
  appId: "1:662663252557:web:b58375c61aefb17496ea04",
  measurementId: "G-5H2CNDF762",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
