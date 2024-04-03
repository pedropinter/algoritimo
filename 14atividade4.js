const readlineSync = require('readline-sync');

const tarefa1 = readlineSync.question("Digite sua tarefa num1: ");
const tarefa2 = readlineSync.question("Digite sua tarefa num2: ");
const tarefa3 = readlineSync.question("Digite sua tarefa num3: ");

const tarefasdodiadias = [tarefa1,tarefa2,tarefa3]
console.log(tarefasdodiadias);

const remover = readlineSync.question("Digite qual deseja remover: ")
tarefasdodiadias.splice(remover,1)
console.log(tarefasdodiadias);