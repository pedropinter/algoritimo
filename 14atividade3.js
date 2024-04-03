//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail.
//Em seguida, Imprima no console a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const readlineSync = require('readline-sync');
const emailDoUsuario = readlineSync.question("Qual o seu email? ");
const nomeDoUsuario = readlineSync.question("Como devemos te chamar? ");

console.log("O e-mail "+ emailDoUsuario + " foi cadastrado com sucesso. Seja bem vinda(o), " + nomeDoUsuario);

const comidasfav = ["Strogonoff de Frango", "Churrasco", "Pizza", "Sushi", "Hamburguer"]
console.log(comidasfav)
console.log("Minhas comidas favoritas são: ")
console.log(comidasfav[0])
console.log(comidasfav[1])
console.log(comidasfav[2])
console.log(comidasfav[3])
console.log(comidasfav[4])
const comida2 = readlineSync.question("Qual sua comida favorita? ");

comidasfav[1] = comida2
console.log(comidasfav)


