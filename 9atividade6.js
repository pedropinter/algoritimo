//Solicite um número do usuário e, em seguida, determine se o número é positivo
//negativo ou igual a zero. Exiba a mensagem correspondente.

const readline = require('readline');
const zero = 0
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um numero: ', (numero) => {
    if (numero > zero){
        console.log('Esse numero é positivo')
    }   else {
            console.log('Esse numero é negativo')}
    
        rl.close();

});