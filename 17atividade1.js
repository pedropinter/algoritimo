 
const arrayDePalavras = ["Oi" , "Sumido", "tudo", "bem?", "Saudades"];
function imprimirMensagem(arrayDePalavras){
    let mensagem = ''
    for (let palavra of arrayDePalavras){    
        mensagem += palavra + " ";
    }
    console.log(mensagem);
}
imprimirMensagem(arrayDePalavras);


