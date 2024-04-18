const time = {
    nome: 'Gremio2017',
    anodelancamento: 1903,
    jogadores: ['Geromito', 'LuanMessi', 'Renato MelhorDoMundo'],
    assisti: true

}
time.posicoes =  ['ZAG' , 'MEI', 'PD']
time.jogadores[1] = 'MAICON'
console.log (time)

const outrotime = {
    ...time,
    nome: 'Gremio2024',
    jogadores: ['Villasanti', 'Cristaldo', 'Suarez'],
    assisti: true,
    posicoes: ['VOL', 'MEI', 'ATA']
}

console.log(outrotime)