// Validation logic
function validateForm(event) {
    event.preventDefault();  // Prevent form submission to handle validation
  
    const nameInput = document.querySelector('input[placeholder="NAME"]');
    const emailInput = document.querySelector('input[placeholder="EMAIL"]');
    const contactInput = document.querySelector('input[placeholder="CONTACT NO"]');
    const selectInput = document.querySelector('select');
    const messageInput = document.querySelector('input[placeholder="MESSAGE"]');
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const contact = contactInput.value.trim();
    const selectValue = selectInput.value;
  
    // Name validation: only text, no numbers or special characters
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name || !nameRegex.test(name)) {
      showCustomNotification("Please enter a valid name (letters only).");
      return false;
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!email || !emailRegex.test(email)) {
      showCustomNotification("Please enter a valid email address.");
      return false;
    }
  
    // Contact number validation: must be 10 digits, starting with 6, 7, 8, or 9
    const contactRegex = /^[6789]\d{9}$/;
    if (!contact || !contactRegex.test(contact)) {
      showCustomNotification("Please enter a valid 10-digit contact number starting with 6, 7, 8, or 9.");
      return false;
    }
  
    // Select dropdown validation
    if (selectValue === "select") {
      showCustomNotification("Please select a valid option.");
      return false;
    }
  
    // Success notification and reset form
    showCustomNotification("Form submitted successfully!", true);
    resetForm();
    return true;
  }
  
  // Display custom notification
  function showCustomNotification(message, success = false) {
    const notification = document.getElementById("kikiCustomNotification");
    const notificationMessage = document.getElementById("kikiNotificationMessage");
  
    notificationMessage.textContent = message;
    notification.style.display = "block";
    // notification.style.backgroundColor = success ? "#4CAF50" : "#f44336"; // Green for success, Red for error
  }
  
  // Close notification
  function kikiCloseNotification() {
    document.getElementById("kikiCustomNotification").style.display = "none";
  }
  
  // Reset the form
  function resetForm() {
    const form = document.querySelector('form');
    form.reset();  // Reset form inputs
  }
  
  // Event listeners
  document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.querySelector('.app-form-button:nth-child(1)');
    const cancelButton = document.querySelector('.app-form-button:nth-child(2)');
  
    sendButton.addEventListener("click", (event) => {
      validateForm(event);
    });
  
    cancelButton.addEventListener("click", (event) => {
      event.preventDefault();
      resetForm();
    });
  });
  