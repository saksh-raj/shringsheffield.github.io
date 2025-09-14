import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDttbW_6BI8rLKSixRJ8nFMDxgizVxioB0",
    authDomain: "shring-sheffield-school-e2855.firebaseapp.com",
    projectId: "shring-sheffield-school-e2855",
    storageBucket: "shring-sheffield-school-e2855.firebasestorage.app",
    messagingSenderId: "443856110536",
    appId: "1:443856110536:web:4e1a7305533a6626a576fd"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  window.studentLogin = function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Clear error if previously shown
    const passwordInput = document.getElementById("password");
    passwordInput.classList.remove("is-invalid");
    document.getElementById("passwordError").textContent = "";

    // Redirect
    window.location.href = "student-dashboard.html";
  })
  .catch((error) => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorDiv = document.getElementById("passwordError");

//     console.error("Error code:", error.code);
//   console.error("Error message:", error.message);
    // If wrong password or invalid credentials
    if (error.code === "auth/invalid-credential") {
      emailInput.classList.add("is-invalid");
      passwordInput.classList.add("is-invalid");
      errorDiv.textContent = "Incorrect e-mail or password. Please try again.";
    } else if (error.code === "auth/user-not-found") {
      passwordInput.classList.add("is-invalid");
      errorDiv.textContent = "No account found with this email.";
    }else if (error.code === "auth/invalid-email") {
      passwordInput.classList.add("is-invalid");
      errorDiv.textContent = "Invalid email.";
    }
     else {
      passwordInput.classList.add("is-invalid");
      errorDiv.textContent = "Login failed: " + error.message;
    }
  });


  document.getElementById("email").addEventListener("input", () => {
  document.getElementById("email").classList.remove("is-invalid");
  document.getElementById("password").classList.remove("is-invalid");
  document.getElementById("passwordError").textContent = "";
});

document.getElementById("password").addEventListener("input", () => {
  document.getElementById("password").classList.remove("is-invalid");
  document.getElementById("email").classList.remove("is-invalid");
  document.getElementById("passwordError").textContent = "";
});
  }