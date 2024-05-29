// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4eBH6YOCE76wGaTf2KCKjWLaiEjibi9I",
  authDomain: "work-portfolio-bd100.firebaseapp.com",
  projectId: "work-portfolio-bd100",
  storageBucket: "work-portfolio-bd100.appspot.com",
  messagingSenderId: "967462623463",
  appId: "1:967462623463:web:f6ead4df3b3c72c514aa42",
  measurementId: "G-J26M2VPC30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);