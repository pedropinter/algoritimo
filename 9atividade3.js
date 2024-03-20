//Peça ao usuário sua idade e, em seguida, exiba uma mensagem
//dizendo se ele é maior de idade ou menor de idade.

const readline = require('readline');
const maiordeidadee = 18
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a sua idade: ', (idade) => {
    if (idade >= maiordeidadee){
        console.log('Voce é maior de idade')
    }   else {
            console.log('Voce é menor de idade')}
    
        rl.close();

});
    
