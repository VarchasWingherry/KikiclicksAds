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
// category code
function validateCheckboxes(event) {
    const checkboxes = document.querySelectorAll('input[name="category"]');
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    if (!isChecked) {
        event.preventDefault(); // Prevent the default action (navigation)
        kikiShowNotification('Please select at least one category before proceeding.');
    } else {
        // If at least one checkbox is checked, allow navigation
        window.location.href = '../html/viewads.html';
    }
}
