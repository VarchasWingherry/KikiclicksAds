document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('advertisementTable');
    const deleteButtons = document.querySelectorAll('.delete');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const confirmation = confirm('Are you sure you want to delete this row?');
            
            if (confirmation) {
                const row = event.target.closest('tr'); 
                row.remove(); 
                updateRowNumbers(); 
            }
        });
    });

    function updateRowNumbers() {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach((row, index) => {
            row.querySelector('td:first-child').textContent = index + 1; 
        });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const createBtn = document.querySelector('.create');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');
    const form1=document.querySelector(".popup form")

    createBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        form1.reset();
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
            form1.reset();
        }
    });
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
    let value = event.target.value;
    
    value = value.replace(/[^a-zA-Z0-9@._-]/g, '');

    if (value.startsWith(' ')) {
        value = value.slice(1);
    }

    let atCount = (value.match(/@/g) || []).length;
    if (atCount > 1) {
        value = value.slice(0, value.lastIndexOf('@'));
    }

    event.target.value = value;
});
document.getElementById('companyName').addEventListener('input', function(event) {
    let value = event.target.value;
    value = value.replace(/[^a-zA-Z\s]/g, '');

    if (value.startsWith(' ')) {
        value = value.slice(1);
    }

    event.target.value = value;
});
document.getElementById('contact').addEventListener('invalid', function(event) {
    if (event.target.validity.patternMismatch || event.target.value.length !== 10) {
        event.target.setCustomValidity('Please enter a valid 10-digit mobile number');
    }
});

document.getElementById('contact').addEventListener('input', function(event) {
    event.target.setCustomValidity('');
});


document.getElementById('logoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const imageUrl = URL.createObjectURL(file);

        const imagePreviewContainer = document.getElementById('imagePreviewContainer');
        const imagePreview = document.getElementById('imagePreview');
        const removeImageButton = document.getElementById('removeImage');

        imagePreview.src = imageUrl;
        imagePreviewContainer.style.display = 'block';

        removeImageButton.addEventListener('click', function() {
            document.getElementById('logoUpload').value = '';
            imagePreview.src = '';
            imagePreviewContainer.style.display = 'none';
        });
    }
});
document.getElementById('startDate').addEventListener('change', function() {
    validateDates();
});

document.getElementById('endDate').addEventListener('change', function() {
    validateDates();
});

function validateDates() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (startDate && endDate) {
        if (new Date(startDate) >= new Date(endDate)) {
            document.getElementById('endDate').setCustomValidity('End Date must be after Start Date.');
        } else {
            document.getElementById('endDate').setCustomValidity('');
        }
    }
}

// Update Popup

document.addEventListener('DOMContentLoaded', (event) => {
    
    const editBtns = document.querySelectorAll('.p1'); 
    const popup = document.getElementById('updatePopup');
    const closeBtn = document.querySelector('.updateClose');
    const form1 = document.querySelector(".popup form");

    editBtns.forEach(editBtn => {
        editBtn.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });
    

    
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        form1.reset(); 
    });

    // Close the popup when clicking outside the popup
    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
            form1.reset(); // Reset the form fields when closed
        }
    });
});

document.getElementById('updateName').addEventListener('input', function(event) {
    let value = event.target.value;
    value = value.replace(/[^a-zA-Z\s]/g, '');

    if (value.startsWith(' ')) {
        value = value.slice(1);
    }

    event.target.value = value;
});

document.getElementById('updateEmail').addEventListener('input', function(event) {
    let value = event.target.value;
    
    value = value.replace(/[^a-zA-Z0-9@._-]/g, '');

    if (value.startsWith(' ')) {
        value = value.slice(1);
    }

    let atCount = (value.match(/@/g) || []).length;
    if (atCount > 1) {
        value = value.slice(0, value.lastIndexOf('@'));
    }

    event.target.value = value;
});

document.getElementById('updateCompanyName').addEventListener('input', function(event) {
    let value = event.target.value;
    value = value.replace(/[^a-zA-Z\s]/g, '');

    if (value.startsWith(' ')) {
        value = value.slice(1);
    }

    event.target.value = value;
});

document.getElementById('updateContact').addEventListener('invalid', function(event) {
    if (event.target.validity.patternMismatch || event.target.value.length !== 10) {
        event.target.setCustomValidity('Please enter a valid 10-digit mobile number');
    }
});

document.getElementById('updateContact').addEventListener('input', function(event) {
    event.target.setCustomValidity('');
});

document.getElementById('updateLogoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const imageUrl = URL.createObjectURL(file);

        const imagePreviewContainer = document.getElementById('updateImagePreviewContainer');
        const imagePreview = document.getElementById('updateImagePreview');
        const removeImageButton = document.getElementById('updateRemoveImage');

        imagePreview.src = imageUrl;
        imagePreviewContainer.style.display = 'block';

        removeImageButton.addEventListener('click', function() {
            document.getElementById('updateLogoUpload').value = '';
            imagePreview.src = '';
            imagePreviewContainer.style.display = 'none';
        });
    }
});

document.getElementById('updateStartDate').addEventListener('change', function() {
    validateDates();
});

document.getElementById('updateEndDate').addEventListener('change', function() {
    validateDates();
});

function validateDates() {
    const startDate = document.getElementById('updateStartDate').value;
    const endDate = document.getElementById('updateEndDate').value;

    if (startDate && endDate) {
        if (new Date(startDate) >= new Date(endDate)) {
            document.getElementById('updateEndDate').setCustomValidity('End Date must be after Start Date.');
        } else {
            document.getElementById('updateEndDate').setCustomValidity('');
        }
    }
}



