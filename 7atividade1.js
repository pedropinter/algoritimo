const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)//false

resultado = bool1 && bool2 && bool3// false
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2)// true
console.log("c. ", resultado)

console.log("d. ", typeof resultado)//boolean

let primeiroNumero = "100"
let segundoNumero = "43"

let numero = Number (primeiroNumero)
let numero2 = Number (segundoNumero)

soma = numero + numero2

console.log(soma)
