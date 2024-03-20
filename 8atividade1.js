const eu = "pedro"
const idade = 18
const curso = 0
const ensinomedio = true

const maiordeidade = 18

const maior = (idade >= maiordeidade)
const outrocurso = (curso === 0)

if (maior && ensinomedio && outrocurso){
    console.log ("Parabéns, Você pode entrar na Faculdade")
}else {
    console.log ("Infelizmente você não poderá participar")
}

