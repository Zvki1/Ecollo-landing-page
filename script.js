const menu =document.getElementById("mobile-menu")
const button =document.getElementById("btn")

button.addEventListener('click',()=>{
    menu.classList.toggle("hidden")
})