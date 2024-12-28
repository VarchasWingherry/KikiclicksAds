function kikiShowNotification(message) {
    const messageElement = document.getElementById('kikiNotificationMessage');
    messageElement.textContent = message;
    const notification = document.getElementById('kikiCustomNotification');
    notification.style.display = 'block';
}

function kikiCloseNotification() {
    const notification = document.getElementById('kikiCustomNotification');
    notification.style.display = 'none';
}

function validateLoginForm() {
    // Clear previous errors
    clearErrors();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let valid = true;

    // Validation checks
    if (email === '') {
        showError('email', 'Email is required');
        valid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        valid = false;
    }

    if (password === '') {
        showError('password', 'Password is required');
        valid = false;
    }

    if (valid) {
        kikiShowNotification('Login successful');
    }

    return valid; // Prevent form submission if invalid
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorMessage = document.getElementById(fieldId + 'Error');

    input.classList.add('error'); // Add error class for red border
    errorMessage.textContent = message; // Set the error message
    errorMessage.style.display = 'block'; // Show the error message
}

function clearErrors() {
    const inputs = document.querySelectorAll('input');
    const errorMessages = document.querySelectorAll('.error-message');

    inputs.forEach(input => {
        input.classList.remove('error'); // Remove error class
    });

    errorMessages.forEach(errorMessage => {
        errorMessage.textContent = ''; // Clear error message
        errorMessage.style.display = 'none'; // Hide error message
    });
}

function togglePasswordVisibility(fieldId, icon) {
    const input = document.getElementById(fieldId);
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    icon.classList.toggle('fa-eye-slash'); // Change icon to indicate visibility state
}
