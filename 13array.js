//arrays sao lista de elementos
const listaDeNumeroMega = [2,4,42,15,41,12]

const listadecompras = ["batata", "alface", "queijo"]
const segundoItem = listadecompras[0]
console.log(segundoItem)
//usar colchetes e a contagem comeca no 0

const pokemonsfoda = ["Kyogre", "Squirtle", "Articuno", "Primeape", "Vaporeon"]
const numerodopokemon = pokemonsfoda[0]
console.log(numerodopokemon)//ver opokemon
console.log(pokemonsfoda.length)//numero de opcoes
console.log(pokemonsfoda.includes("Charizard"))//verifica se tem
pokemonsfoda.pop()//remove o ultimo
console.log(pokemonsfoda)
pokemonsfoda.push("Rayquaza")//adicionar
console.log(pokemonsfoda)

const letras = ["A","B","C","D","E"]
letras.splice(2,1)// removeu o C
letras.splice(3,2)// removeu o E
console.log(letras)