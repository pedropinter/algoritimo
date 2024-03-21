//Solicite ao usuário dois números e uma operação (por exemplo, +, -, *, /).
//Use if e else para executar a operação escolhida e exibir o resultado.

const readline = require('readline');
const zero = 0
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um numero: ", (num1) => {
    rl.question("Digite o segundo numero: ", (num2) => {
        rl.question("Digite o terceiro numero: ", (num3) => {
            let maiornumero = num1;
            if (num2 > maiornumero) {
                maiornumero = num2;
            }
            if (num3 > maiornumero) {
                maiornumero = num2;
            } 

            console.log(`O maior numero é: ${maiornumero}`)


        })
    })
})