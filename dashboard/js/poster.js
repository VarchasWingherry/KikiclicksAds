    $(document).ready(function() {
        $('#adsTable').DataTable({
            "paging": true,      // Enable Pagination
            "searching": true,   // Enable Search Box
            "ordering": true,    // Enable Sorting
            "info": true,        // Show "Showing 1 to X of Y entries"
            "pageLength": 5,     // Records per page
            "columnDefs": [
                { "orderable": false, "targets": [0, 6] } // Disable sorting on 'User' and 'Bank Details' (adjust index if needed)
            ]
        });
    });
