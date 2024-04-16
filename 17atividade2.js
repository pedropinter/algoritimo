const readlineSync = require('readline-sync');

let num1 = readlineSync.question(`Quantos bixinhos voce tem: ${[]}`);
if (num1 > 0){
    let num2 = readlineSync.question("Quais os nomes deles: ");
    function imprimirMensagem(num1){
        let mensagem = ''
        for (let num2 of num1){
            mensagem += num2 + " ";
        }

        imprimirMensagem()
        console.log (mensagem)
    }
}
else if (num1 == 0){
    console.log("Voce pode adotar um bixinho")
}