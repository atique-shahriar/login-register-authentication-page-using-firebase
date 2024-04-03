import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBECrH3l8Ba_gO8FmjG0LBerQKzO2XPbNc",
  authDomain: "login-register-page-cd501.firebaseapp.com",
  projectId: "login-register-page-cd501",
  storageBucket: "login-register-page-cd501.appspot.com",
  messagingSenderId: "159333007094",
  appId: "1:159333007094:web:fef39e9b31fa51e6c5f6d7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
