const pessoa = {
    nome: "Pedro",
    idade: 15,
    generoMusical:"Sertanejo"
}
function criaNovoObjeto (objeto){
    const NovaPessoa = {...objeto,
    comidafavorita: ['Frango', 'Peixe', 'Carne'],
    amigo:{
    nomemelhoramigo: 'Costarengo',
    idademelhoramigo: 16
}
}
console.log("Meu nome é "+nome+" tenho "+idade+ " anos")
console.log("Minhas comidas favoritas são "+comidafavorita[0]+","+comidafavorita[1]+" e "+comidafavorita[2])
console.log("Meu melhor amigo é o "+nomemelhoramigo+" ele tem "+idademelhoramigo+" anos")

}
NovaPessoa(pessoa)
