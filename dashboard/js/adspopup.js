document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('advertisementTable');

    // Event delegation for delete buttons
    table.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete')) {
            const confirmation = confirm('Are you sure you want to delete this row?');
            if (confirmation) {
                const row = event.target.closest('tr');
                row.remove();
                updateRowNumbers();
            }
        }
    });

    function updateRowNumbers() {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach((row, index) => {
            row.querySelector('td:first-child').textContent = index + 1;
        });
    }

    // Handle Create Popup
    const createBtn = document.querySelector('.create');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');
    const cancelBtn = document.getElementById('cancel'); // Cancel button
    const form1 = popup.querySelector("form");

    createBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => closePopup(popup, form1));
    cancelBtn.addEventListener('click', () => closePopup(popup, form1)); // Close on Cancel

    window.addEventListener('click', (event) => {
        if (event.target === popup) closePopup(popup, form1);
    });

    function closePopup(popup, form) {
        popup.style.display = 'none';
        form.reset();
    }

    // Handle Update Popup
    const editBtns = document.querySelectorAll('.p1');
    const updatePopup = document.getElementById('updatePopup');
    const updateCloseBtn = document.querySelector('.updateClose');
    const updateCancelBtn = document.getElementById('updateCancel'); // Cancel button
    const updateForm = updatePopup.querySelector("form");

    editBtns.forEach(editBtn => {
        editBtn.addEventListener('click', () => {
            updatePopup.style.display = 'block';
        });
    });

    updateCloseBtn.addEventListener('click', () => closePopup(updatePopup, updateForm));
    updateCancelBtn.addEventListener('click', () => closePopup(updatePopup, updateForm)); // Close on Cancel

    window.addEventListener('click', (event) => {
        if (event.target === updatePopup) closePopup(updatePopup, updateForm);
    });

    // Input Validations
    function textValidation(event) {
        let value = event.target.value.replace(/[^a-zA-Z\s]/g, '');
        event.target.value = value.trimStart();
    }

    function emailValidation(event) {
        let value = event.target.value.replace(/[^a-zA-Z0-9@._-]/g, '');
        let atCount = (value.match(/@/g) || []).length;
        if (atCount > 1) value = value.slice(0, value.lastIndexOf('@'));
        event.target.value = value.trimStart();
    }

    document.getElementById('name').addEventListener('input', textValidation);
    document.getElementById('email').addEventListener('input', emailValidation);
    document.getElementById('companyName').addEventListener('input', textValidation);

    const contactInput = document.getElementById('contact');
    contactInput.addEventListener('input', () => contactInput.setCustomValidity(''));
    contactInput.addEventListener('invalid', function () {
        if (this.validity.patternMismatch || this.value.length !== 10) {
            this.setCustomValidity('Please enter a valid 10-digit mobile number');
        }
    });

    // Image Upload Handling
    function handleImageUpload(inputId, previewContainerId, previewId, removeBtnId) {
        const fileInput = document.getElementById(inputId);
        const previewContainer = document.getElementById(previewContainerId);
        const imagePreview = document.getElementById(previewId);
        const removeButton = document.getElementById(removeBtnId);

        fileInput.addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                imagePreview.src = URL.createObjectURL(file);
                previewContainer.style.display = 'block';
            }
        });

        removeButton.addEventListener('click', function () {
            fileInput.value = '';
            imagePreview.src = '';
            previewContainer.style.display = 'none';
        });
    }

    handleImageUpload('logoUpload', 'imagePreviewContainer', 'imagePreview', 'removeImage');

    // Date Validation
    function validateDates(startDateId, endDateId) {
        const startDate = document.getElementById(startDateId).value;
        const endDate = document.getElementById(endDateId).value;

        if (startDate && endDate) {
            if (new Date(startDate) >= new Date(endDate)) {
                document.getElementById(endDateId).setCustomValidity('End Date must be after Start Date.');
            } else {
                document.getElementById(endDateId).setCustomValidity('');
            }
        }
    }
    document.addEventListener('DOMContentLoaded', () => {
        const durationInput = document.getElementById('duration');
    
        durationInput.addEventListener('input', function () {
            let value = parseInt(this.value, 10);
    
            // If value is NaN or less than 1, set it to 1
            if (isNaN(value) || value < 1) {
                this.value = 1;
            }
            // If value is greater than 30, set it to 30
            else if (value > 30) {
                this.value = 30;
            }
        });
    
        durationInput.addEventListener('keydown', function (event) {
            // Prevent entering non-numeric characters
            if (!/^[0-9]$/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete') {
                event.preventDefault();
            }
        });
    
        durationInput.addEventListener('change', function () {
            // Ensure value remains within 1-30 range after change
            if (this.value < 1) this.value = 1;
            if (this.value > 30) this.value = 30;
        });
    });
    
    document.getElementById('startDate').addEventListener('change', () => validateDates('startDate', 'endDate'));
    document.getElementById('endDate').addEventListener('change', () => validateDates('startDate', 'endDate'));

    document.getElementById('updateStartDate').addEventListener('change', () => validateDates('updateStartDate', 'updateEndDate'));
    document.getElementById('updateEndDate').addEventListener('change', () => validateDates('updateStartDate', 'updateEndDate'));
});
