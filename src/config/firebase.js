// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbhgD_ABUzfRREi-tiITS277E2JqJUUk0",
  authDomain: "info-pedro-4abfe.firebaseapp.com",
  projectId: "info-pedro-4abfe",
  storageBucket: "info-pedro-4abfe.appspot.com",
  messagingSenderId: "693240524095",
  appId: "1:693240524095:web:2ebbe665357d202fa2778a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);