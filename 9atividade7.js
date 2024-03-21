//Crie uma variável com uma senha (por exemplo, "1234"). Solicite ao usuário que insira uma senha
//e verifique se a senha inserida corresponde à senha armazenada. Exiba uma mensagem
//de "Login bem-sucedido" ou "Senha incorreta".

const readline = require('readline');
const senhaArmazenada = "4321"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a senha: ', (senha) => {
    if (senha === senhaArmazenada){
        console.log('Pode entrar')
    }   else {
            console.log('Nao pode entrar')}
    
        rl.close();

});
