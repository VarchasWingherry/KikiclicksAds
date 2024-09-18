let points = 1000; // Example points, this value can be dynamically set
let balance = 0;

document.getElementById('points').innerText = points;

function claimPoints() {
    if (points > 0) {
        balance += points / 10; 
        points = 0;
        document.getElementById('points').innerText = points;
        document.getElementById('balance').innerText = balance.toFixed(2);
    } else {
        alert('No points to claim');
    }
}

function withdraw() {
    if (balance > 0) {
        let bankLinked = confirm('Is your bank linked?'); 
        if (bankLinked) {
            alert('Withdrawal Successful! Amount: $' + balance.toFixed(2));
            balance = 0;
            document.getElementById('balance').innerText = balance.toFixed(2);
        } else {
            alert('Please link your bank to withdraw.');
        }
    } else {
        alert('No balance to withdraw');
    }
}
