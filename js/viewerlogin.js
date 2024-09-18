// function togglePasswordVisibility(inputId, toggleIcon) {
//     const passwordInput = document.getElementById(inputId);
//     const type = passwordInput.type === 'password' ? 'text' : 'password';
//     passwordInput.type = type;
//     toggleIcon.classList.toggle('fa-eye-slash');
// }

// function validateLoginForm() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (!validateEmail(email)) {
//         alert('Please enter a valid email address');
//         return false;
//     }

//     if (password.length < 6) {
//         alert('Password must be at least 6 characters long');
//         return false;
//     }

//     alert('Login successful');
//     return true;
    
// }
// const tempUsername = "user@example.com";
// const tempPassword = "password123";

// if (email === tempUsername && password === tempPassword) {
//     alert('Login successful');
//     // Redirect to home page
//     window.location.href = "../html/terms.html";
// } else {
//     alert('Invalid email or password');
// }
// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }



// function togglePasswordVisibility(inputId, toggleIcon) {
//     const passwordInput = document.getElementById(inputId);
//     const type = passwordInput.type === 'password' ? 'text' : 'password';
//     passwordInput.type = type;
//     toggleIcon.classList.toggle('fa-eye-slash');
// }

// function validateLoginForm() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (!validateEmail(email)) {
//         alert('Please enter a valid email address');
//         return false;
//     }

//     if (password.length < 6) {
//         alert('Password must be at least 6 characters long');
//         return false;
//     }

//     const tempUsername = "user@example.com";
//     const tempPassword = "password123";

//     if (email === tempUsername && password === tempPassword) {
//         alert('Login successful');
//         // Redirect to home page
//         window.location.href = "../html/viewhome.html";
//     } else {
//         alert('Invalid email or password');
//         return false;
//     }
// }

// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }


// script.js

// function togglePasswordVisibility(inputId, toggleIcon) {
//     const passwordInput = document.getElementById(inputId);
//     const type = passwordInput.type === 'password' ? 'text' : 'password';
//     passwordInput.type = type;
//     toggleIcon.classList.toggle('fa-eye-slash');
// }

// function validateLoginForm() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (!validateEmail(email)) {
//         alert('Please enter a valid email address');
//         return false;
//     }

//     if (password.length < 6) {
//         alert('Password must be at least 6 characters long');
//         return false;
//     }

//     const tempUsername = "user@example.com";
//     const tempPassword = "password123";

//     if (email === tempUsername && password === tempPassword) {
//         alert('Login successful');
//         const urlParams = new URLSearchParams(window.location.search);
//         const redirectUrl = urlParams.get('redirect');
//         window.location.href = redirectUrl || '../html/viewhome.html';
//         return false;
//     } else {
//         alert('Invalid email or password');
//         return false;
//     }
// }

// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }

// let isLoggedIn = false;  // This should be dynamically set based on actual login status

// document.querySelectorAll('.category-box').forEach(box => {
//     box.addEventListener('click', function() {
//         const selectedCategory = this.getAttribute('data-category');
        
//         if (isLoggedIn) {
//             window.location.href = `../html/viewads.html?category=${selectedCategory}`;
//         } else {
//             window.location.href = `../html/login.html?redirect=ads.html?category=${selectedCategory}`;
//         }
//     });
// });





// login.js

// login.js

let isLoggedIn = false;  // This should be dynamically set based on actual login status

function togglePasswordVisibility(inputId, toggleIcon) {
    const passwordInput = document.getElementById(inputId);
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    toggleIcon.classList.toggle('fa-eye-slash');
}

function validateLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }

    // Dummy authentication
    const tempUsername = "user@example.com";
    const tempPassword = "password123";

    if (email === tempUsername && password === tempPassword) {
        alert('Login successful');
        isLoggedIn = true;  // Update login status
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirect');
        window.location.href = redirectUrl || '../html/viewhome.html';
        return false;
    } else {
        alert('Invalid email or password');
        return false;
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

