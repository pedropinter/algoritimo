const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escreva uma frase: ", (frase) => {
    const frasemaiuscula = frase.toUpperCase()
    console.log(frasemaiuscula)
    const novaFrase = frase.replaceAll("o","i")
    console.log(novaFrase)
    console.log(frase.length)
    
    rl.close();
});