function checkSelection(event) {
    const selected = document.querySelector('input[name="category"]:checked');
    
    if (!selected) {
        event.preventDefault();  // Prevent form submission
        kikiShowNotification('Please select a category before proceeding.');  // Show custom notification
    }
  }
  
  function kikiShowNotification(message) {
    // Set the message for the notification
    const messageElement = document.getElementById('kikiNotificationMessage');
    messageElement.textContent = message;
  
    // Display the notification
    const notification = document.getElementById('kikiCustomNotification');
    notification.style.display = 'block';
  }
  
  function kikiCloseNotification() {
    // Close the notification by hiding it
    const notification = document.getElementById('kikiCustomNotification');
    notification.style.display = 'none';
  }
  
  
  
  // scroll for fiexd next btn
  document.addEventListener("DOMContentLoaded", function () {
      const nextButton = document.querySelector(".next");
      const category = document.querySelector(".category");
    
      function updateButtonPosition() {
        const categoryRect = category.getBoundingClientRect();
        const nextButtonHeight = nextButton.offsetHeight;
    
        if (categoryRect.bottom <= nextButtonHeight) {
          // Add class to change the position when .category is scrolled out
          nextButton.classList.add("scroll-out");
        } else {
          // Remove the class when inside .category
          nextButton.classList.remove("scroll-out");
        }
      }
    
      // Attach the scroll event listener
      window.addEventListener("scroll", updateButtonPosition);
    });
    