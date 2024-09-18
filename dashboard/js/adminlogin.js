
document.addEventListener("DOMContentLoaded", function() {
    // Toggle
    const togglePassword = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");

    togglePassword.addEventListener("click", function() {
        const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
        passwordField.setAttribute("type", type);
        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
    });

    // Login validation
    document.getElementById('login').addEventListener('click', function(event) {
        event.preventDefault();
    
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
    
        var correctUsername = "admin";
        var correctPassword = "123";
    
        if (username === correctUsername && password === correctPassword) {
            alert("Login successful!");
            window.location.href = "../html/index.html";
        } else {
            alert("Invalid username or password.");
        }
    });
    
});
