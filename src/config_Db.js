// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMi_wccEEzkvVXEd2TdvEpTH_CHYDTNMU",
  authDomain: "mydb-5032f.firebaseapp.com",
  projectId: "mydb-5032f",
  storageBucket: "mydb-5032f.appspot.com",
  messagingSenderId: "293734156217",
  appId: "1:293734156217:web:3245f1fdd8643bf3005868",
  measurementId: "G-6HG5GQFY1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);