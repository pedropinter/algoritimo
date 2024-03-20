//importando o modulo readline
const readline = require('readline');
const { isDataView } = require('util/types');

//criando uma instancia de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//solicitando ao usuario que insira sua idade
rl.question("Qual a sua idade?", (idade) => {
    //exibindo a idade inserida pelo usuario
    console.log("Sua idade é:", idade);

    //fechando a interface do usuario
    rl.close();
});