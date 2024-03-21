function imprimirfrase (nome){
    console.log(`Ola ${nome}`)
}
imprimirfrase('Pinter')
imprimirfrase('Leo')
imprimirfrase('Miguel')

function calcularmedia (soma1,soma2,soma3){
    let somatotal = (soma1 + soma2 + soma3)
    let media = somatotal / 3
    console.log(`A média é ${media}.`)
}
calcularmedia (2,4,6)
calcularmedia (50,66,70)


function calcularimparpar (num1){
    if (num1 % 2 === 0){
        console.log('seu numero é par')
    } else {
        console.log('seu numero é impar')
    }
}
calcularimparpar (7)