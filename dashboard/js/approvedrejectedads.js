$(document).ready(function() {
    $('#adsTable').DataTable({
        "paging": true,   // Enable Pagination
        "searching": true, // Enable Search
        "ordering": true,  // Enable Sorting
        "info": true,      // Show info like "Showing 1 to 10 of 50 entries"
        "pageLength": 5,   // Records per page
        "columnDefs": [
            { "orderable": false, "targets": [0, 2, 3] } // Disable sorting on AdCode, Title, Ad Type
        ]
    });
});

// pop up
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("ads-modal");
    const closeModalButtons = document.querySelectorAll(".ads-close, .ads-close-btn");

    // Open modal when clicking AdCode links
    document.querySelectorAll("#adsTable tbody td a").forEach((link) => {
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

