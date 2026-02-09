const formTitle = document.getElementById("form-title");
const formSubtitle = document.getElementById("form-subtitle");
const authForm = document.getElementById("auth-form");
const signupBtn = document.getElementById("signup-btn");
const createAccountBtn = document.getElementById("create-account-btn");

let mode = "login"; // login | signup

// Fake database using localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// LOGIN / SIGNUP SUBMIT
authForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const users = getUsers();

  if (mode === "login") {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("✅ Login successful! Welcome to the Resident Dashboard.");
    } else {
      alert("❌ Invalid email or password.");
    }
  } else {
    if (users.some((u) => u.email === email)) {
      alert("⚠️ Account already exists.");
      return;
    }

    users.push({ email, password });
    saveUsers(users);

    alert("🎉 Account created successfully!");
    switchToLogin();
  }
});

// SWITCH TO SIGNUP
signupBtn.addEventListener("click", () => {
  mode = "signup";
  formTitle.innerText = "Create Account";
  formSubtitle.innerText = "Register as a new resident.";
  document.getElementById("login-btn").innerText = "Register";
});

// CREATE ACCOUNT BUTTON
createAccountBtn.addEventListener("click", () => {
  mode = "signup";
  formTitle.innerText = "Create New Resident Account";
  formSubtitle.innerText = "Please fill in the details to register.";
  document.getElementById("login-btn").innerText = "Create Account";
});

// BACK TO LOGIN AFTER SIGNUP
function switchToLogin() {
  mode = "login";
  formTitle.innerText = "Secure Access";
  formSubtitle.innerText =
    "Please enter your credentials to access the resident dashboard.";
  document.getElementById("login-btn").innerText = "Log in";
}
