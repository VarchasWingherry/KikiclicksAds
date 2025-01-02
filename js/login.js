// ✅ Show custom notification
function showCustomNotification(message) {
    const notification = document.getElementById('kikiCustomNotification');
    const notificationMessage = document.getElementById('kikiNotificationMessage');
    notificationMessage.textContent = message;
    notification.style.display = 'block';
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
        emailError.textContent = 'Please enter a valid email address.';
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
        showCustomNotification('Invalid password format! Password must be at least 6 characters, include one uppercase letter, one number, and one special character (@).');
        return false;
    }

    return true;
}

// ✅ Reset Form Fields
function resetLoginForm() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
}

// ✅ Handle Login Button Click
document.getElementById('loginBtn').addEventListener('click', function () {
    // ✅ Step 1: Validate Email First
    const isEmailValid = validateEmail();
    if (!isEmailValid) {
        return; // Stop if email validation fails
    }

    // ✅ Step 2: Validate Password Only After Email is Valid
    const isPasswordValid = validatePassword();
    if (!isPasswordValid) {
        return; // Stop if password validation fails
    }

    // ✅ If both validations pass
    showCustomNotification('Login successful!');

    
    // ✅ Reset form after successful login
    resetLoginForm();
});
