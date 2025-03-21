$(document).ready(function() {
    $('#artTable').DataTable({
        "paging": true,   
        "searching": true, 
        "ordering": true,  
        "info": true,      
        "pageLength": 5,   
        "columnDefs": [
            { "orderable": false, "targets": [0, 2, 3] } // Disable sorting on specific columns
        ]
    });
});


// pop up
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("art-modal");
    const closeModalButtons = document.querySelectorAll(".art-close, .art-close-btn");

    // Open modal when clicking Article Code links
    document.querySelectorAll("#artTable tbody td a").forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link action
            modal.style.display = "block"; // Show modal
        });
    });

    // Close modal when clicking on (×) or "Close" button
    closeModalButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    });

    // Close modal when clicking outside content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

