const ponepiece = ["Luffy", "Sanji", "Zoro", "Usopp", "Chopper","Brook"];

function escolhe(array){

    const aleatorio = Math.floor(Math.random()* array.lenght);

    return array[aleatorio];
}
const persoalea = escolhe(ponepiece);
console.log("Voce tirou: ", persoalea)
