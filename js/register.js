// ✅ Show custom notification
function showCustomNotification(message) {
    const notification = document.getElementById('kikiCustomNotification');
    const notificationMessage = document.getElementById('kikiNotificationMessage');
    notificationMessage.textContent = message;
    notification.style.display = 'block';

    // Auto-close notification after 2 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

// ✅ Close custom notification
function kikiCloseNotification() {
    document.getElementById('kikiCustomNotification').style.display = 'none';
}

// ✅ Toggle Password Visibility
function togglePasswordVisibility(fieldId, icon) {
    const field = document.getElementById(fieldId);
    if (field.type === 'password') {
        field.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        field.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// ✅ Validate Full Name
function validateFullName() {
    const fullName = document.getElementById('fullName').value.trim();
    const fullNameError = document.getElementById('fullNameError');
    fullNameError.textContent = '';

    if (!fullName) {
        fullNameError.textContent = 'Please enter your full name.';
        showCustomNotification('Full name is required!');
        return false;
    }
    return true;
}

// ✅ Validate Email
function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    emailError.textContent = '';

    if (!email) {
        emailError.textContent = 'Please enter your email.';
        showCustomNotification('Email is required!');
        return false;
    }

    const emailPattern = /^[^\s@]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address (must end with @gmail.com).';
        showCustomNotification('Invalid email format!');
        return false;
    }

    return true;
}

// ✅ Validate Password
function validatePassword() {
    const password = document.getElementById('password').value.trim();
    const passwordError = document.getElementById('passwordError');
    passwordError.textContent = '';

    if (!password) {
        passwordError.textContent = 'Please enter your password.';
        showCustomNotification('Password is required!');
        return false;
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{6,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be at least 6 characters, include one uppercase letter, one number, and one special character (@).';
        showCustomNotification('Invalid password format!');
        return false;
    }

    return true;
}

// ✅ Validate Confirm Password
function validateConfirmPassword() {
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    confirmPasswordError.textContent = '';

    if (!confirmPassword) {
        confirmPasswordError.textContent = 'Please confirm your password.';
        showCustomNotification('Please confirm your password!');
        return false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        showCustomNotification('Passwords do not match!');
        return false;
    }

    return true;
}

// ✅ Handle Register Button Click
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Start validating fields in order
    const isFullNameValid = validateFullName();
    if (!isFullNameValid) {
        return; // Stop validation if Full Name is invalid
    }

    const isEmailValid = validateEmail();
    if (!isEmailValid) {
        return; // Stop validation if Email is invalid
    }

    const isPasswordValid = validatePassword();
    if (!isPasswordValid) {
        return; // Stop validation if Password is invalid
    }

    const isConfirmPasswordValid = validateConfirmPassword();
    if (!isConfirmPasswordValid) {
        return; // Stop validation if Confirm Password is invalid
    }

    // If all validations pass, show success message
    showCustomNotification('Registration successful!');
    
    // Optionally, reset the form
    document.getElementById('registerForm').reset();
    // Clear all error messages
    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
});
