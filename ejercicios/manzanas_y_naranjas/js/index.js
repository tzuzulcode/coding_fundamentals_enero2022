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

console.log(simulation.apples)
console.log(simulation.oranges)

console.log(simulation.simulate(startHome,endHome))