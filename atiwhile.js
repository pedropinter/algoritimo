let contar = 0

while (contar < 21){
    console.log(`Contando ${contar} num`)
    contar++
}

let descontar = 10

while (descontar >= 0){
    if ( (descontar == 0)){
    console.log("boom")
    }
    else if ((descontar % 2 == 1)){
    console.log("tac")
    }
    else if (descontar % 2 == 0){
    console.log("tic")
    }
    descontar--
}


const readlineSync = require('readline-sync');
let input
while ((input > 0) || (input < 0)) {
    input = Number(readlineSynn.question("Numero: "));
    if (true){
    console.log("Soma = " (input + input))
    } 
}
