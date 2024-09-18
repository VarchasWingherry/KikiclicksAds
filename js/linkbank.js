const link=document.querySelector(".plus")

link.addEventListener("click",(event)=>{
    event.preventDefault()
    document.querySelector(".modal").style.display="block"
})

function closeModal(){
    document.querySelector(".modal").style.display="none"
}

const form=document.getElementById("accdetails-form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const accountNumber=document.getElementById("number").value
    const reAccountNumber=document.getElementById("re-number").value
    if(accountNumber===reAccountNumber)
    {
        document.querySelector(".error").style.display='none'
        document.querySelector(".modal").style.display="none"
        document.querySelector(".plus").style.backgroundColor="green"
        document.querySelector(".plus").style.color="white"
        document.querySelector(".plus").innerText="linked"
    }
    else{
        document.querySelector(".error").style.display="block"
        document.querySelector(".modal").style.display="block"
    }
})