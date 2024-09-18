// login validation
document.getElementById('loginBtn').addEventListener('click',function(event){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var correctEmail = "poster";
    var correctPassword ="123";

    if(email===correctEmail && correctPassword === correctPassword){
        alert("Login successful!");
        window.location.href = "../html/posthome.html"
    }
    else{
        alert("Invalid email or password.")
    }
});

// toggle code

document.querySelector('.toggle-password').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    var passwordFieldType = passwordField.getAttribute('type');
    if (passwordFieldType === 'password') {
        passwordField.setAttribute('type', 'text');
        this.textContent = 'Hide';
    } else {
        passwordField.setAttribute('type', 'password');
        this.textContent = 'Show';
    }
});