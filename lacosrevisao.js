let volta = 0
//enquanto o ciclista nao percorrer 10voltas, ele continua pedalando
//a corrida para quando ele atingir 10 voltas
while (volta <= 10){
    console.log(`Voce ja deu ${volta} voltas`)
    console.log('De mais uma volta')

    volta++
}
console.log('Voce Chegou ao final')

const numeros = [5,6,8,4,2,5,8]

for (let i=0; i < numeros.length; i++){
    console.log(numeros[i])
}
//FAZEM A MESMA COISA
for (let numero of numeros){
    console.log(numero)
}
