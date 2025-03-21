$(document).ready(function () {
    // Initialize DataTable
    const table = $('#advertisementTable').DataTable({
        "paging": true,        
        "searching": true,    
        "ordering": true,     
        "info": true,         
        "autoWidth": false,    
        "responsive": true    
    });

    const modal = document.getElementById('kikiCustomConfirm');
    const overlay = document.getElementById('kikiOverlay');
    const confirmBtn = document.getElementById('kikiConfirmDelete');
    const cancelBtn = document.getElementById('kikiCancelDelete');

    let currentRowIndex = null;

    // Open confirmation modal on delete button click
    $('#advertisementTable tbody').on('click', '.delete', function () {
        currentRowIndex = table.row($(this).closest('tr')).index();
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Confirm delete action (Handled by DataTables)
    confirmBtn.addEventListener('click', () => {
        if (currentRowIndex !== null) {
            table.row(currentRowIndex).remove().draw(false); 
            updateSerialNumbers(); 
        }
        closeModal();
    });

    // Cancel delete action
    cancelBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal); 

    function closeModal() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        currentRowIndex = null;
    }

    // Update serial numbers after deletion
    function updateSerialNumbers() {
        $('#advertisementTable tbody tr').each(function (index) {
            $(this).find('td:first').text(index + 1); 
        });
    }
});





    // Handle Create Popup
   
    
    
    
    
    
// });

document.addEventListener("DOMContentLoaded", function () {
    const createBtn = document.querySelector(".create");
    const editBtns = document.querySelectorAll(".p1");
    const popup = document.getElementById("popup");
    const updatePopup = document.getElementById("updatePopup");
    const closeBtns = document.querySelectorAll(".close, .updateClose");
    const cancelBtns = document.querySelectorAll("#cancel, #updateCancel");

    const createForm = popup.querySelector("form");
    const updateForm = updatePopup.querySelector("form");

    // Open Create Popup
    createBtn.addEventListener("click", () => {
        popup.style.display = "block";
    });

    // Open Update Popup
    editBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            updatePopup.style.display = "block";
        });
    });

    // Close Popups and Reset Forms
    function closePopups() {
        popup.style.display = "none";
        updatePopup.style.display = "none";
        createForm.reset();
        updateForm.reset();
        clearErrors(createForm);
        clearErrors(updateForm);
    }

    closeBtns.forEach((btn) => {
        btn.addEventListener("click", closePopups);
    });

    cancelBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            closePopups();
        });
    });

    // Clear existing error messages
    function clearErrors(form) {
        form.querySelectorAll(".error-msg").forEach(el => el.remove());
    }

    // Validate Form
    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll("input, textarea, select");
        clearErrors(form);

        inputs.forEach((input) => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    // Validate Single Field
    function validateField(input) {
        let errorMsg = "";
        const value = input.value.trim();
        const errorSpan = document.createElement("span");
        errorSpan.classList.add("error-msg");
        errorSpan.style.color = "red";
        errorSpan.style.fontSize = "12px";
        errorSpan.style.display = "block";
        errorSpan.style.marginTop = "5px";

        if (!value) {
            errorMsg = "This field is required.";
        } else if (input.id.includes("updateName") || input.id.includes("updateCompanyName")) {
            if (!/^[A-Z][a-zA-Z\s]+$/.test(value)) {
                errorMsg = "Must start with uppercase & only letters/spaces.";
            }
        } else if (input.id.includes("updateEmail")) {
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                errorMsg = "Enter a valid email.";
            }
        } else if (input.id.includes("updateContact")) {
            if (!/^[6789]\d{9}$/.test(value)) {
                errorMsg = "Must start with 6,7,8,9 & be 10 digits.";
            }
        } else if (input.id.includes("updateLogoUpload")) {
            if (input.files.length > 0) {
                const file = input.files[0];
                if (!file.type.startsWith("image/")) {
                    errorMsg = "Only image files allowed.";
                }
            }
        } else if (input.id.includes("duration")) {
            if (value < 1 || value > 30) {
                errorMsg = "Duration must be between 1-30 seconds.";
            }
        } else if (input.id.includes("updateStartDate") || input.id.includes("updateEndDate")) {
            const startDate = document.getElementById("updateStartDate")?.value;
            const endDate = document.getElementById("updateEndDate")?.value;
            if (startDate && endDate && new Date(endDate) <= new Date(startDate)) {
                errorMsg = "End Date must be after Start Date.";
            }
        }

        if (errorMsg) {
            errorSpan.innerText = errorMsg;
            input.parentNode.appendChild(errorSpan);
            return false;
        }

        return true;
    }

    // Submit Form Validation (Create)
    createForm.addEventListener("submit", function (event) {
        if (!validateForm(createForm)) {
            event.preventDefault();
            popup.style.display = "block";
        } else {
            closePopups();
        }
    });

    // Submit Form Validation (Update)
    updateForm.addEventListener("submit", function (event) {
        if (!validateForm(updateForm)) {
            event.preventDefault();
            updatePopup.style.display = "block";
        } else {
            closePopups();
        }
    });

    // Image Preview Handling
    function handleImagePreview(input, previewContainer, previewImage, removeButton) {
        input.addEventListener("change", function () {
            if (input.files.length > 0) {
                const file = input.files[0];
                const reader = new FileReader();
                reader.onload = function (e) {
                    previewImage.src = e.target.result;
                    previewContainer.style.display = "block";
                };
                reader.readAsDataURL(file);
            }
        });

        removeButton.addEventListener("click", function () {
            input.value = "";
            previewContainer.style.display = "none";
            previewImage.src = "";
        });
    }

    // Setup Image Preview for Create
    handleImagePreview(
        document.getElementById("logoUpload"),
        document.getElementById("imagePreviewContainer"),
        document.getElementById("imagePreview"),
        document.getElementById("removeImage")
    );

    // Setup Image Preview for Update
    handleImagePreview(
        document.getElementById("updateLogoUpload"),
        document.getElementById("updateImagePreviewContainer"),
        document.getElementById("updateImagePreview"),
        document.getElementById("updateRemoveImage")
    );
});



