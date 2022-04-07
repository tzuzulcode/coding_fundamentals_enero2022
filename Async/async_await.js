const app = document.getElementById("app")


async function pedirInformacion(){
    const url = "https://rickandmortyapi.com/api"
    try{
        const resultado = await fetch(url)

        const conversion = await resultado.json()

        console.log(conversion)

    }catch(error){
        console.log(error.message)
        const mensaje = document.createElement("p")
        mensaje.innerText = error.message
        app.appendChild(mensaje)
    }

    console.log("Otro console log")
    

   
}

pedirInformacion()

console.log("Proceso final")
console.log("Proceso final")
console.log("Proceso final")
console.log("Proceso final")
console.log("Proceso final")