function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)
//1)
//a)sera feito uma multiplicacao por 5
//b)nada

let textoDoUsuario = ("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//1)
//a)o usuario escreve uma frase e o comando transforma em minuscula e verifica se é cenoura
//b)true em todos