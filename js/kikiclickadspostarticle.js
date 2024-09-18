

const dropVideo=document.querySelector(".drag-area1")
const dropArea=document.querySelector(".drag-area")
const button=document.getElementById("browse")
const input=document.getElementById('upload-area')

button.onclick=()=>{
    input.click()
}

input.addEventListener("change",function(){
    file=this.files[0]
    showFile()
})

function crossRem(){
    dropVideo.innerHTML ='';
}

let file;

dropArea.addEventListener("dragover",(event)=>{
    event.preventDefault();
    dropArea.classList.add("active")
    
})
dropArea.addEventListener("dragleave",(event)=>{
    event.preventDefault();
    dropArea.classList.remove("active")
    
})
dropArea.addEventListener("drop",(event)=>{
    event.preventDefault();
    dropArea.classList.remove("active");
    file=event.dataTransfer.files[0];
    showFile();
});
function showFile(){
    let fileType=file.type
    let validExtensions=["video/mp4", "image/png", "image/jpg", "image/jpeg"];
    if(validExtensions.includes(fileType))
        {
            let fileReader= new FileReader()
            fileReader.onload=()=>{
                let fileURL=fileReader.result;
                let mediaTag;
                if (fileType.startsWith("video")){
                    mediaTag = `<video id="preview" src="${fileURL}" controls></video>`;
                } else{
                    mediaTag = `<img id="preview" src="${fileURL}" alt="image preview" style="max-width: 100%; height: auto;" />`;
                }    
                
                dropVideo.innerHTML=`${mediaTag}<div id="cross" onclick=crossRem()>&#215;</div>`;
            }
            fileReader.readAsDataURL(file);
        }
    else{
        alert("please upload the video file or image")
    }
}


//Toastify

let notifications=document.getElementById('notification')
let success=document.getElementById('success')

function createToast(type,icon,title,content){
    let newToast=document.createElement('div')
    newToast.innerHTML=`<div class="toast ${type}">
    <i class="${icon}"></i>
    <div class="content">
        <div class="title">${title}</div>
        <div class="content">${content}</div>
    </div>
    <span onclick="(this.parentElement).remove()">&#215;</span>
</div>`;
notifications.appendChild(newToast)
newToast.timeOut=setTimeout(
    ()=>newToast.remove(),5000
)
}

success.onclick=function(){
    let type='success'
    let icon='fa-solid fa-circle-check'
    let title='Success'
    let content='Please wait for Admin Apporval'
    createToast(type, icon, title, content)
}