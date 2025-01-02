

// Function to show the custom notification
function showCustomNotification(message) {
const notification = document.getElementById('kikiCustomNotification');
const notificationMessage = document.getElementById('kikiNotificationMessage');
notificationMessage.textContent = message;
notification.style.display = 'block';
}

// Function to close the notification
function kikiCloseNotification() {
document.getElementById('kikiCustomNotification').style.display = 'none';
}

// Toggle password visibility
function togglePasswordVisibility(fieldId, icon) {
const field = document.getElementById(fieldId);
if (field.type === "password") {
field.type = "text";
icon.classList.remove("fa-eye");
icon.classList.add("fa-eye-slash");
} else {
field.type = "password";
icon.classList.remove("fa-eye-slash");
icon.classList.add("fa-eye");
}
}

// Password validation function (called only when clicking "Set Password")
function validatePassword() {
const newPassword = document.getElementById('newPassword').value;
const confirmPassword = document.getElementById('confirmPassword').value;

const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{6,}$/;

// Check for password format
if (!passwordPattern.test(newPassword)) {
showCustomNotification('Password must have at least one uppercase letter, one number, and one "@" symbol.');
return false;
}

// Check if passwords match
if (newPassword !== confirmPassword) {
showCustomNotification('Passwords do not match. Please try again.');
return false;
}

return true;
}

// Set password function (called when clicking "Set Password")
function setPassword() {
const newPassword = document.getElementById('newPassword').value;
const confirmPassword = document.getElementById('confirmPassword').value;

// Validate only when the "Set Password" button is clicked
if (validatePassword()) {
// Show success notification
showCustomNotification('Your password has been successfully changed. Redirecting to login page');

// Redirect to the login page after a 3-second delay
setTimeout(() => {
    window.location.href = "../html/login.html";
}, 4000);
}
}


