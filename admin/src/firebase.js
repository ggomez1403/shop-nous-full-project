// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArOf5vp9beKweBv2n7keUBQqMPXh2Cltc",
  authDomain: "nous-shop.firebaseapp.com",
  projectId: "nous-shop",
  storageBucket: "nous-shop.appspot.com",
  messagingSenderId: "1090542172743",
  appId: "1:1090542172743:web:cf644ce7e94b1846a60f62",
  measurementId: "G-ZRR2BDJJBL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
