const nome = "Pinter"
const idade = 15
const frase = "Meu nome é " + nome + " e tenho " + idade + " anos"
console.log (frase)

const pal1 = 'Pe'
const pal2 = 'dro'
console.log(pal1 + pal2)

const nome2 = "Pinter"
const idade2 = 15
//console.log ('Meu nome é ' + nome + ', eu tenho '+ idade + 'anos.')//concatenacao
console.log (`Meu nome é ${nome2}, eu tenho ${idade2} anos.`)//template string

const nome3 = "Pinter"
const cor3 = "Azul"
const frase3 = "Meu nome é " + nome + " e minha cor favorita é " + cor3
console.log (frase3)

const nome4 = "Pinter"
const time4 = "Gremista"
console.log (`Meu nome é ${nome4}, e sou ${time4}.`)

const nome5 = "Pedro Henrique Caussi Pinter"
console.log(nome5.length)

const frase4 = "PEDRO PINTER"
const fraseminuscula = frase4.toLowerCase()
console.log(fraseminuscula)

const frase5 = "pedro pinter"
const frasemaiuscula = frase5.toUpperCase()
console.log(frasemaiuscula)

const email = "              pedropinter@gmail.com                  "
console.log(email.trim())//tirar espaco

const frase6 = "Hoje Gremio eu vim te ver"
frase6.includes("Gremio")
frase6.includes("Morango")
console.log(frase6.includes("Gremio"))
console.log(frase6.includes("Morango"))

const frase7 = "Hoje comi arroz e carne"
const novaFrase = frase7.replaceAll("arroz", "massa")
console.log(novaFrase)