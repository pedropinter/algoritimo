function calcularArea(base,altura){
    const area = base * altura
    console.log(area)

}
calcularArea(5,2)
calcularArea(8,7)

function frase(nome,anos){//PARAMETRO
    console.log(`Ola ${nome}, tenho ${anos} anos`)   
}
frase('Pedro', 15)//ARGUMENTO
frase('Leo', 29)

function media(nota1,nota2,nota3){
    const media = ((nota1 + nota2 + nota3) / 3).toFixed(2)
    console.log(media)
}
media(10,20,30)
media(2,6,10)

function parimpar(numero){
    if(numero%2 == 0){
    console.log("Par")
}   else{
    console.log("Impar")
}
  }
parimpar(6)
parimpar(5)

function soma (num1,num2){
    return num1 + num2
}
console.log(soma(1,2))


