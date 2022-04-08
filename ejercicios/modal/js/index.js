const openBtn = document.getElementById("abrir")
const closeBtn = document.getElementById("cerrar")
const modal = document.getElementById("modal")

modal.style.display = "none"


openBtn.onclick = ()=>{
    modal.style.display = "flex"
}
closeBtn.onclick = ()=>{
    modal.style.display = "none"
}