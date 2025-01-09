// Custom Notification
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

// Profile Picture Upload
const profilePic = document.querySelector(".image img");
const userFile = document.querySelector(".file-path");
const deleteBtn = document.getElementById("delete-btn");

userFile.onchange = function () {
  if (userFile.files.length > 0) {
    profilePic.src = URL.createObjectURL(userFile.files[0]);
    deleteBtn.style.display = "block";
  }
};

deleteBtn.onclick = function () {
  profilePic.src = "../assets/default.png";
  userFile.value = "";
  deleteBtn.style.display = "none"; 
};

document.getElementById('saveBtn').addEventListener('click', function () {
  const fields = ['name', 'contact', 'gender', 'email', 'address', 'org', 'state'];
  let isValid = true;

  for (let field of fields) {
    const input = document.getElementById(field);

    // General validation: check if the field is empty
    if (!input.value.trim()) {
      input.classList.add('error');
      input.focus();
      kikiShowNotification(`${field.charAt(0).toUpperCase() + field.slice(1)} cannot be empty.`);
      isValid = false;
      return;
    } else {
      input.classList.remove('error');
    }

    // Specific validations
    if (field === 'contact') {
      const contactPattern = /^[6-9]\d{9}$/; // Validates 10 digits starting with 6, 7, 8, or 9
      if (!contactPattern.test(input.value.trim())) {
        input.classList.add('error');
        input.focus();
        kikiShowNotification('Contact number must be 10 digits and start with 6, 7, 8, or 9.');
        isValid = false;
        return;
      } else {
        input.classList.remove('error');
      }
    }

    if (field === 'email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Validates email format
      if (!emailPattern.test(input.value.trim())) {
        input.classList.add('error');
        input.focus();
        kikiShowNotification('Please enter a valid email address.');
        isValid = false;
        return;
      } else {
        input.classList.remove('error');
      }
    }
  }

  if (isValid) {
    document.getElementById('nextBtn').disabled = false;
    kikiShowNotification('Profile Updated successfully', true);
    document.getElementById('nextLink').setAttribute('href', '../html/viewadscategory.html');

  }
});

// Next button click without saving
document.getElementById('nextBtn').addEventListener('click', function (event) {
  if (document.getElementById('nextBtn').disabled) {
    event.preventDefault();
    kikiShowNotification('Enter details of the profile.');
  }
});

// Utility function to show notifications
// function kikiShowNotification(message, success = false) {
//   const notification = document.createElement('div');
//   notification.textContent = message;
//   notification.className = success ? 'notification success' : 'notification error';
//   document.body.appendChild(notification);
//   setTimeout(() => notification.remove(), 3000);
// }
