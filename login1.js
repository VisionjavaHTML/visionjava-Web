// script.js
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "Admin" && password === "Heyhey") {
      window.location.href = "admin.html";
    } else {
      var errorMessage = document.createElement("p");
      errorMessage.className = "error-message";
      errorMessage.textContent = "Invalid username or password";
      document.getElementById("login-form").appendChild(errorMessage);
    }
  });
  