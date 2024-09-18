function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

const marks = document.querySelectorAll(".questionmark");
marks.forEach(mark => {
    mark.addEventListener("click", (event) => {
        event.preventDefault();
        const show = mark.closest(".modal-content").querySelector(".show-cvv");
        if (show.style.display === "none" || show.style.display === "") {
            show.style.display = "block";
        } else {
            show.style.display = "none";
        }
    });
});

document.getElementById("verification").addEventListener("click",(event)=>{
    event.preventDefault()
    document.querySelector(".main-verify").style.display="block"
})

document.querySelector(".qr-code>figure>span").addEventListener("click",(event)=>{
    event.preventDefault()
    document.querySelector(".qrcode1").style.display="none"
    document.querySelector(".qrcode2").style.display="block"
})
