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
