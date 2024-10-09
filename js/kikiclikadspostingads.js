const dropVideo = document.querySelector(".drag-area1");
const dropArea = document.querySelector(".drag-area");
const button = document.getElementById("browse");
const input = document.getElementById('upload-area');

let file;
let uploadCount = 0; 

button.onclick = () => {
    input.click();
};

input.addEventListener("change", function() {
    file = this.files[0];
    showFile();
});

function crossRem() {
    dropVideo.innerHTML = '';
    uploadCount = 0;
}

dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea.classList.add("active");
});

dropArea.addEventListener("dragleave", (event) => {
    event.preventDefault();
    dropArea.classList.remove("active");
});

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    dropArea.classList.remove("active");
    file = event.dataTransfer.files[0];
    showFile();
});

function showFile() {
    let fileType = file.type;
    let validExtensions = ["video/mp4", "image/png", "image/jpg", "image/jpeg"];
    
    if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let mediaTag;

            if (fileType.startsWith("video")) {
                mediaTag = `<video id="preview" src="${fileURL}" controls></video>`;
            } else {
                mediaTag = `<img id="preview" src="${fileURL}" alt="image preview" style="max-width: 100%; height: auto;" />`;
            }

            dropVideo.innerHTML = `${mediaTag}<div id="cross" onclick="crossRem()">&times;</div>`;
            uploadCount++; 
        };
        fileReader.readAsDataURL(file);
    } else {
        alert("Please upload a valid video file or image");
    }
}



//Toastify

let notifications = document.getElementById('notification');
let success = document.getElementById('success');

function createToast(type, icon, title, content) {
    let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="ad-title">${title}</div>
                <div class="contents">${content}</div>
            </div>
            <span onclick="this.parentElement.remove()" id="cross">&#215;</span>
        </div>`;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(() => newToast.remove(), 5000);
}

success.onclick = function() {
    let titleInput = document.getElementById('title');
    let descInput = document.getElementById('desc');

    let valid=true;

    // Check inputs
    if (!titleInput.value.trim() || !descInput.value.trim() || uploadCount === 0) {
        if (!titleInput.value.trim()) {
            titleInput.style.border="2px solid red";
            document.getElementById("title-error").style.display="block";
            valid=false
        }
        else{
            titleInput.style.border="";
            document.getElementById("title-error").style.display="none";
            valid=true;

        }
        if (!descInput.value.trim()) {
            descInput.style.border="2px solid red";
            document.getElementById("desc-error").style.display="block";
            valid=false;

        }
        else{
            descInput.style.border="";
            document.getElementById("desc-error").style.display="none";
            valid=true

        }
        if (uploadCount === 0) {
            document.querySelector(".drag-area").style.border="2px dashed red"
            valid=false;
        }
        else{
            document.querySelector(".drag-area").style.border="";
            valid=true;
        }
    }
    if(valid){
        let type = 'success';
        let icon = 'fa-solid fa-circle-check';
        let title = 'Success';
        let content = 'Please wait for Admin Approval.';
        createToast(type, icon, title, content);
        document.querySelector('form').reset();
    }
    else{
        let type = 'error';
        let icon = 'fa-solid fa-circle-exclamation';
        let title = 'Error';
        let content = 'Please fill in all fields and upload an ad.';
        createToast(type, icon, title, content);
    }
};
document.getElementById('title').addEventListener('input', function(event) {
    let value = event.target.value;
            value = value.replace(/[^a-zA-Z\s]/g, '');

            if (value.startsWith(' ')) {
                value = value.slice(1);
            }

            event.target.value = value;
});


