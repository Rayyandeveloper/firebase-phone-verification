import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

export const firebaseConfig = {
    apiKey: "AIzaSyBJ63vxj8Y5EUexxOk-02cOLIbLDFWnY5E",
    authDomain: "first-404e8.firebaseapp.com",
    projectId: "first-404e8",
    storageBucket: "first-404e8.firebasestorage.app",
    messagingSenderId: "785773860558",
    appId: "1:785773860558:web:835188e9bd6088f662a29f",
    measurementId: "G-14ETBRM4KB"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { RecaptchaVerifier, signInWithPhoneNumber };

