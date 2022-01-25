console.log("Hola")
//var -> variable
var mensaje = "Hola, mundo" // Expresiones

var dinero = 125.45
var estadoCivil = true //Boolean -> true o false

//Operadores aritméticos
var impuesto = dinero * 0.16

console.log("Impuesto:",impuesto)

//var dineroUsuario = prompt("Ingresa un valor") // Lanza un mensaje para rellenar un valor

var dineroUsuario = 123.456
// Parsing
// Conversión de datos
// Incluyendo conversiones a diferentes tipos de datos

console.log(dineroUsuario)

console.log(typeof dineroUsuario)

//impuesto = dineroUsuario * 0.16 // Conversión implicita
impuesto = parseFloat(dineroUsuario) * 0.16

console.log("Impuesto:",impuesto)
console.log(typeof impuesto)

console.log(Math.random()*100)

var hoy = Date.now() // timestamp: Numero de milisegundos desde 01-01-1970

console.log(hoy)

// UNICODE en strings
// UTF-16

var infinito = '∞ 😊 🫐'
console.log(infinito)

var nombre = "Tzuzul"

var saludo = "Hola"

var union = saludo + " " + nombre //"Hola Tzuzul"

console.log(union)

// Boolean
//Condiciones
// Condicionales


// operadores aritméticos

var suma = 5+10
var suma = 5-10
var suma = 5*10
var suma = 5/10
var suma = 5+10
var residuo = 5%10 // operador de modulo
console.log(suma)