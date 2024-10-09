const dropVideo = document.querySelector(".drag-area1");
const dropArea = document.querySelector(".drag-area");
const button = document.getElementById("browse");
const input = document.getElementById('upload-area');
const successButton = document.getElementById("success");
const titleInput = document.getElementById('title');
const textInput = document.getElementById('text-input');
let file = null;  // Start with no file uploaded

// Browse button click
button.onclick = () => {
    input.click();
};

// File upload
input.addEventListener("change", function () {
    file = this.files[0];
    showFile();
});

// Cross remover function
function crossRem() {
    dropVideo.innerHTML = '';
    file = null;  // Reset the file when the cross is clicked
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

// Show file preview
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

            dropVideo.innerHTML = `${mediaTag}<div id="cross" onclick=crossRem()>&#215;</div>`;
        }
        fileReader.readAsDataURL(file);
    } else {
        alert("Please upload a valid video file or image.");
    }
}

// Toastify function to show notifications
let notifications = document.getElementById('notification');

function createToast(type, icon, title, content) {
    let newToast = document.createElement('div');
    newToast.innerHTML = `<div class="toast ${type}">
        <i class="${icon}"></i>
        <div class="content">
            <div class="ad-title">${title}</div>
            <div class="contents">${content}</div>
        </div>
        <span onclick="(this.parentElement).remove()" id="cross">&#215;</span>
    </div>`;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(() => newToast.remove(), 5000);
}

// Validation function
function validateForm() {
    const title = titleInput.value.trim();
    const text = textInput.innerText.trim();
    const wordCount = text.split(/\s+/).length;
    const isFileUploaded = file !== null;

    let isValid = true;

    // Validate file upload
    if (!isFileUploaded) {
        dropArea.style.border = "2px dashed red";
        isValid = false;
    } else {
        dropArea.style.border = "";
    }

    // Validate title
    if (!title) {
        titleInput.style.border = '2px solid red';
        document.getElementById("error-title").style.display = 'block';
        isValid = false;
    } else {
        titleInput.style.border = '';
        document.getElementById("error-title").style.display = 'none';
    }

    // Validate text input (word count between 10 and 50)
    if (wordCount < 10 || wordCount > 50) {
       
        document.querySelector("#text-input").style.border = "2px solid red";
        document.getElementById("text-error").style.display = "block";
        isValid = false;
    } else {
        document.querySelector("#text-input").style.border = "";
        document.getElementById("text-error").style.display = "none";
    }

    return isValid;
}

// Submit button event
successButton.addEventListener("click", (event) => {
    event.preventDefault();  // Prevent the form from submitting
    if (validateForm()) {
        createToast('success', 'fa-solid fa-circle-check', 'Success', 'Your article is submitted and waiting for admin approval.');
        // Uncomment to actually submit the form after validation passes:
        // document.querySelector('form').submit();
    }
    else{
        createToast('error', 'fa-solid fa-exclamation-circle', 'Error', 'Please add the required fields and submit');
    }
});

document.getElementById('title').addEventListener('input', function(event) {
    let value = event.target.value;
            value = value.replace(/[^a-zA-Z\s]/g, '');

            if (value.startsWith(' ')) {
                value = value.slice(1);
            }

            event.target.value = value;
});

