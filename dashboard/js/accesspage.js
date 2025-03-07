function openForm() {
    document.getElementById("accessModal").style.display = "block";
}
function closeForm() {
    document.getElementById("accessModal").style.display = "none";
}
function confirmAction(message) {
    if (confirm(message)) {
        alert("Action confirmed!");
    }
}