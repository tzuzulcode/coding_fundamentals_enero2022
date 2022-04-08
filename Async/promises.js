const app = document.getElementById("app")

// URL: https://rickandmortyapi.com/api

// const resultado = fetch("https://rickandmortyapi.com/api") // fetch significa dar la orden de traernos algo

// console.log(resultado)

// fetch("https://rickandmortyapi.com/api")
// .then((value)=>{
//     value.json()
//     .then((datos)=>{
//         console.log(da)
//     })

// }) // Recibe un callback. Nos indica que la promesa se cumplio
// .catch(function (error){
//     console.log(error)
//     const mensaje = document.createElement("p")
//     mensaje.innerText = "Ocurrio un error al pedir la información"
//     app.appendChild(mensaje)
// })
// fetch("https://rickandmortyapi.com/api")
// .then((value)=>{
//     return value.json()
// }).then((datos)=>{
//     console.log(datos)
// })
// .catch(function (error){
//     console.log(error)
//     const mensaje = document.createElement("p")
//     mensaje.innerText = "Ocurrio un error al pedir la información"
//     app.appendChild(mensaje)
// })

const printData = data=>{
    div.innerHTML = ""
    data.forEach(element => {

        div.appendChild("")
    });
    
}

const fetchData=(url)=>{
    fetch(url)
        .then(value=>value.json()) // Conversion de stream a JSON. Devuelve otra promesa
        .then(datos=>{
            console.log(datos) // Imprimimos resultados
        })
        .catch(error=>{
            console.log(error)
            const mensaje = document.createElement("p")
            mensaje.innerText = "Ocurrio un error al pedir la información"
            app.appendChild(mensaje)
        }) // Gestionamos el error
        .finally(()=>{
            console.log("Se ha terminado la función")
        })
}

fetch("https://rickandmortyapi.com/api")
.then(value=>value.json()) // Conversion de stream a JSON. Devuelve otra promesa
.then(datos=>{
    console.log(datos) // Imprimimos resultados
})
.catch(error=>{
    console.log(error)
    const mensaje = document.createElement("p")
    mensaje.innerText = "Ocurrio un error al pedir la información"
    app.appendChild(mensaje)
}) // Gestionamos el error
.finally(()=>{
    console.log("Se ha terminado la función")
})