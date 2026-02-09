const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const submitBtn = document.getElementById("submitBtn");
const signupBtn = document.getElementById("signupBtn");
const createBtn = document.getElementById("createBtn");
const form = document.getElementById("authForm");

let mode = "login";

function getUsers() {
  return JSON.parse(localStorage.getItem("icert_users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("icert_users", JSON.stringify(users));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = email.value;
  const password = password.value;
  const users = getUsers();

  if (mode === "login") {
    const match = users.find(u => u.email === email && u.password === password);
    alert(match ? "Login successful" : "Invalid credentials");
  } else {
    if (users.find(u => u.email === email)) {
      alert("Account already exists");
      return;
    }
    users.push({ email, password });
    saveUsers(users);
    alert("Account created");
    switchLogin();
  }
});

signupBtn.onclick = () => switchSignup("Create Account", "Register as a new resident.");
createBtn.onclick = () => switchSignup("Create New Resident Account", "Please fill in the details to register.");

function switchSignup(t, s) {
  mode = "signup";
  title.innerText = t;
  subtitle.innerText = s;
  submitBtn.innerText = "Create Account";
}

function switchLogin() {
  mode = "login";
  title.innerText = "Secure Access";
  subtitle.innerText = "Please enter your credentials to access the resident dashboard and manage your certificates.";
  submitBtn.innerText = "Log in";
}
