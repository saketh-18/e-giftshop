// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFvXbIAgDDwHqdde_3969Z69WijPTwBHA",
    authDomain: "e-giftshop.firebaseapp.com",
    projectId: "e-giftshop",
    storageBucket: "e-giftshop.firebasestorage.app",
    messagingSenderId: "141545911584",
    appId: "1:141545911584:web:7603b7944b74c06fb9d345",
    measurementId: "G-9943REHPJH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function handleLogin(event) {
    event.preventDefault();
    console.log("Login function called");
    
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect after login
    } catch (error) {
        console.error("Login error:", error.message);
        alert(error.message);
    }
}
