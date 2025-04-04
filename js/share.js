const popup = document.getElementById("popup");
const referBtn = document.getElementById("referBtn");
const closePopup = document.getElementById("closePopup");
const sendEmailBtn = document.getElementById("sendEmailBtn");
const emailInput = document.getElementById("emailInput");
const errorMsg = document.getElementById("errorMsg");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

referBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  closeModal();
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    closeModal();
  }
});

sendEmailBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (!emailRegex.test(email)) {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    console.log("Sending referral to:", email);

    setTimeout(() => {
      kikiShowNotification("Referral link sent to " + email);
      closeModal();
    }, 500);
  }
});

function closeModal() {
  popup.style.display = "none";
  emailInput.value = "";
  errorMsg.style.display = "none";
}

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
