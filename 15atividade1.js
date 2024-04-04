const readlineSync = require('readline-sync');

let num1 = readlineSync.question("Digite um numero: ");
let num2 = readlineSync.question("Digite outro numero: ");
let soma = function(num1,num2){
    return (Number(num1) + Number(num2))
}
console.log (soma (num1,num2))
if ((soma (num1,num2)) > 0 ){
    console.log("seu numero é positivo")
}
else {
    console.log("seu numero é negativo")
}