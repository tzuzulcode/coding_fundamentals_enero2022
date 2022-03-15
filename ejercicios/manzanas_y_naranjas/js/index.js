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
const results = document.getElementById("results")


function createElement(className,start,end){
    const element = document.createElement("div")
    element.className = className
    element.style.gridColumnStart = start
    element.style.gridColumnEnd = end
    app.appendChild(element)
}

startBtn.onclick = function(){
    // alert("Dio click")
    //Creando y agregando el arbol de manzanas
    createElement("tree appleTree",simulation.appleTreePos.x,simulation.appleTreePos.x)

    //Creando casa
    createElement("house",startHome,endHome)
    
    //Creando y agregando el arbol de naranjas
    createElement("tree orangeTree",simulation.orangeTreePos.x,simulation.orangeTreePos.x)


    //Creando y agregando las manzanas
    for(let apple of simulation.apples){
        createElement("apple",apple.x,apple.x)
    }

    //Creando y agregando las naranjas
    for(let orange of simulation.oranges){
        createElement("orange",orange.x,orange.x)
    }

    const fruitsInHome = simulation.simulate(startHome,endHome)

    const resultadoManzanas = document.createElement("h2")
    resultadoManzanas.innerText = "Manzanas dentro de la casa: "+fruitsInHome[0]
    results.appendChild(resultadoManzanas)
    const resultadoNaranjas = document.createElement("h2")
    resultadoNaranjas.innerText = "Naranjas dentro de la casa: "+fruitsInHome[1]
    results.appendChild(resultadoNaranjas)

}