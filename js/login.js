function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("login-message");

  if (!username || !password) {
    message.textContent = "Please enter both username and password.";
    return false;
  }

  message.textContent = "Logging in...";
  // Add backend integration here later
  return true;
}

