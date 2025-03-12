function openForm() {
    document.getElementById("accessModal").style.display = "block";
  }

  function closeForm() {
    document.getElementById("accessModal").style.display = "none";
  }
$(document).ready(function() {
    $('#activeAdmins, #inactiveAdmins').DataTable({
        "paging": true,
        "searching": true,
        "ordering": true
    });

    function showConfirmation(action, name, callback) {
        $("#confirmMessage").text(`Are you sure you want to ${action} for ${name}?`);
        $("#confirmPopup").fadeIn();

        $("#confirmYes").off().on("click", function() {
            $("#confirmPopup").fadeOut();
            callback();
        });

        $("#confirmNo").off().on("click", function() {
            $("#confirmPopup").fadeOut();
        });
    }

    function showAlert(message) {
        $("#alertMessage").text(message);
        $("#alertPopup").fadeIn();
    }

    $("#alertOk").on("click", function() {
        $("#alertPopup").fadeOut();
    });

    $(document).on("click", ".btn-deny-access", function() {
        let name = $(this).data("name");
        showConfirmation("Deny Access", name, function() {
            showAlert(`Access denied for ${name}.`);
        });
    });

    $(document).on("click", ".btn-delete-user", function() {
        let name = $(this).data("name");
        showConfirmation("Delete", name, function() {
            showAlert(`${name} has been deleted.`);
        });
    });

    $(document).on("click", ".btn-grant-access", function() {
        let name = $(this).data("name");
        showConfirmation("Grant Access", name, function() {
            showAlert(`Access granted for ${name}.`);
        });
    });
});


// validation code
document.getElementById("accessForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Get form elements
    const empName = document.getElementById("empName");
    const mobile = document.getElementById("mobile");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const gender = document.querySelector('input[name="gender"]:checked');
    const userType = document.querySelector('input[name="userType"]:checked');

    // Clear previous error messages
    document.querySelectorAll(".error-msg").forEach(el => el.remove());

    // Name Validation (Only letters, no numbers or special characters)
    if (!/^[A-Za-z\s]+$/.test(empName.value.trim())) {
        showError(empName, "Enter a valid name (letters only).");
        isValid = false;
    }

    // Mobile Number Validation (10 digits, starts with 6, 7, 8, or 9)
    if (!/^[6789]\d{9}$/.test(mobile.value.trim())) {
        showError(mobile, "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
        isValid = false;
    }

    // Email Validation (Correct email format)
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())) {
        showError(email, "Enter a valid email address.");
        isValid = false;
    }

    // Password Validation:
    // At least 8 characters, one uppercase, one lowercase, one number, and one special character
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password.value.trim())) {
        showError(password, "Password must have: At least 8 characters, One uppercase letter, One lowercase letter, One number, One special character (@$!%*?&)");
        isValid = false;
    }

    // Gender Validation (Ensure one is selected)
    if (!gender) {
        showError(document.querySelector('.radio-group input[name="gender"]'), "\nPlease select a gender.");
        isValid = false;
    }

    // User Type Validation (Ensure one is selected)
    if (!userType) {
        showError(document.querySelector('.radio-group input[name="userType"]'), "\nPlease select a user type.");
        isValid = false;
    }

    // Submit the form if all validations pass
    if (isValid) {
        showKikiNotification("Form submitted successfully!");
        this.submit(); // You can replace this with your actual form submission logic
    }
});

// notification
function showKikiNotification(message) {
    const notification = document.getElementById("kikiCustomConfirm");
    const messageElement = document.getElementById("kikiConfirmMessage");

    messageElement.textContent = message; // Set message
    notification.style.display = "flex"; // Show the notification

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.display = "none";
        document.getElementById("accessForm").submit(); // Submit the form after notification
    }, 4000);
}
document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("password");
    let icon = this;

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
});

// Function to show error messages
function showError(inputElement, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-msg";
    errorDiv.style.color = "red";
    errorDiv.style.fontSize = "12px";
    errorDiv.style.marginTop = "5px";
    errorDiv.style.whiteSpace = "pre-line"; // Ensures new lines in error messages
    errorDiv.textContent = message;
    inputElement.parentNode.appendChild(errorDiv);
}

// Function to close the form
function closeForm() {
    document.getElementById("accessModal").style.display = "none";
}
