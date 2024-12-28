// custom notification
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
// profile 
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



const pname = document.getElementById('name');
  const email = document.getElementById('email');
  const address = document.getElementById('address');
  const contact = document.getElementById('contact');
  const gender = document.getElementById('gender');
  const org = document.getElementById('org');
  const state = document.getElementById('state');
  const saveBtn = document.getElementById('saveBtn');
  const nextBtn = document.getElementById('nextBtn');

  function validateForm() {
    let valid = true;

    if (!pname.value.trim()) {
      pname.style.borderColor = 'red';
      
      valid = false;
    } else {
      pname.style.borderColor = '';
    }

    if (!email.value.trim()) {
      email.style.borderColor = 'red';
      valid = false;
    } 
    else if (!/\S+@\S+\.\S+/.test(email.value)) {  
      email.style.borderColor = 'red';
      valid = false;
    } else {
      email.style.borderColor = '';
    }
    

    if (!address.value.trim()) {
      address.style.borderColor = 'red';
      valid = false;
    } else {
      address.style.borderColor = '';
    }

    if (!contact.value.trim()) {
      contact.style.borderColor = 'red';
      valid = false;
  } else if (!/^\d{10}$/.test(contact.value.trim())) {
      contact.style.borderColor = 'red';
      valid = false;
  } else {
      contact.style.borderColor = '';
  }
  

    if (!gender.value) {
      gender.style.borderColor = 'red';
      valid = false;
    } else {
      gender.style.borderColor = '';
    }

    if (!org.value.trim()) {
      org.style.borderColor = 'red';
      valid = false;
    } else {
      org.style.borderColor = '';
    }

    if (!state.value) {
      state.style.borderColor = 'red';
      valid = false;
    } else {
      state.style.borderColor = '';
    }

    nextBtn.disabled = !valid;

    return valid;
  }

  saveBtn.addEventListener('click', function() {
    if (validateForm()) {
      kikiShowNotification('Form is valid, you can proceed.');
    } else {
      kikiShowNotification('Please fill all required fields.');
    }
  });

  const inputs = [pname, email, address, contact, gender, org, state];
  inputs.forEach(input => {
    input.addEventListener('input', validateForm);
  });

  document.getElementById('name').addEventListener('input', function(event) {
    let value = event.target.value;
            value = value.replace(/[^a-zA-Z\s]/g, '');

            if (value.startsWith(' ')) {
                value = value.slice(1);
            }

            event.target.value = value;
});
document.getElementById('email').addEventListener('input', function(event) {
    event.target.value = event.target.value.replace(/[^a-z_@.]/g, '');
});
document.getElementById('address').addEventListener('input', function(event) {
  let value = event.target.value;
          value = value.replace(/[^a-zA-Z0-9\s]/g, '');

          if (value.startsWith(' ')) {
              value = value.slice(1);
          }

          event.target.value = value;
});
document.getElementById('contact').addEventListener('input', function(event) {
  let value = event.target.value;

  if (value && !/^[6789]/.test(value)) {
      event.target.value = '';
      return;
  }

  event.target.value = value.replace(/[^0-9]/g, '');
});

document.getElementById('proj-area').addEventListener('input', function(event) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
});
document.getElementById('email').addEventListener('input', function(event) {
  event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
});