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

// ✅ Submit Email Function
function submitEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        // Redirect to another page if email is valid
        window.location.href = "../html/emailverify.html";
    } else {
        // Show custom notification for invalid email
        showCustomNotification('Please enter a valid email address.');
    }
}

// ✅ Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@gmail\.com$/;
    return re.test(email);
}
