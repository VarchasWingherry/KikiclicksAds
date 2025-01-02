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

// Function for Resend Verification Email
function resendVerificationEmail() {
    // Simulate OTP resend
    showCustomNotification('OTP resend request sent successfully.');

    // Optional: You can implement the actual logic for resending the email here.
}
