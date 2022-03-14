//Importaciones
import Simulation from "./Simulation.js"

//Posición de la casa
const startHome = 7
const endHome = 10

//Posición de los arboles
const appleTree = 4
const orangeTree = 12

//Posición de la fruta
const apples = [2,3,-4]
const oranges = [3,-2,-4]


const simulation = new Simulation(apples,oranges,appleTree,orangeTree)

// console.log(simulation.apples)
// console.log(simulation.oranges)

// console.log(simulation.simulate(startHome,endHome))

const startBtn = document.getElementById("start")
const app = document.getElementById("app")

startBtn.onclick = function(){
    // alert("Dio click")
    //Creando y agregando el arbol de manzanas
    const appleTree = document.createElement("div")
    appleTree.className = "tree"
    appleTree.style.gridColumnStart = simulation.appleTreePos.x
    appleTree.style.gridColumnEnd = simulation.appleTreePos.x
    app.appendChild(appleTree)

    //Creando y agregando el arbol de naranjas
    const orangeTree = document.createElement("div")
    orangeTree.className = "tree"
    orangeTree.style.gridColumnStart = simulation.orangeTreePos.x
    orangeTree.style.gridColumnEnd = simulation.orangeTreePos.x
    app.appendChild(orangeTree)

    //Creando y agregando las manzanas
    for(let apple of simulation.apples){
        const appleDiv = document.createElement("div")
        appleDiv.className = "apple"
        appleDiv.style.gridColumnStart = apple.x
        appleDiv.style.gridColumnEnd = apple.x
        app.appendChild(appleDiv)
    }

    console.log(simulation.simulate(startHome,endHome))
}