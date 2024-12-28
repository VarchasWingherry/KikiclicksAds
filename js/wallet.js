let points = 1000; // Example points, this value can be dynamically set
let balance = 0;

document.getElementById('points').innerText = points;

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

function claimPoints() {
    if (points > 0) {
        balance += points / 10; 
        points = 0;
        document.getElementById('points').innerText = points;
        document.getElementById('balance').innerText = balance.toFixed(2);
        kikiShowNotification('Points claimed successfully! Your new balance is $' + balance.toFixed(2));
    } else {
        kikiShowNotification('No points to claim');
    }
}

function withdraw() {
    if (balance > 0) {
        let bankLinked = confirm('Is your bank linked?'); 
        if (bankLinked) {
            kikiShowNotification('Withdrawal Successful! Amount: $' + balance.toFixed(2));
            balance = 0;
            document.getElementById('balance').innerText = balance.toFixed(2);
        } else {
            kikiShowNotification('Please link your bank to withdraw.');
        }
    } else {
        kikiShowNotification('No balance to withdraw');
    }
}
