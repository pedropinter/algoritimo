const readlineSync = require('readline-sync');
let array = []
function criarpersonagem() {
    nomeRival = readlineSync.question(`Qual nome de seu rival: ` );
    pokrival = readlineSync.question(`Qual pokemon do seu rival: `);
    tiporival = readlineSync.question(`Qual seu tiporival: `);
    hprival = Number(readlineSync.question(`Qual seu HP: `));
    atkrival = Number(readlineSync.question(`Qual o seu ataque: `));
    defrival = Number(readlineSync.question(`Quais sua defesa: `))

    array.push({nome: nomePersonagem, pokemons: pokrival, tipagemdopokemon: tiporival, vidadoPokemon: hprival,  ataqueDoPokemon: atkrival, defesaDoDokemon: defrival});
}
criarpersonagem()
console.log (array)
console.log()
