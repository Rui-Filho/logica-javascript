/* Desafio 22*/

const clubes = [
    {nome: "Boca", libertadores:6, mundial:3},
    {nome:"River", libertadores:4, mundial:1},
    {nome: "Flamengo", libertadores:4, mundial:1},
    {nome:"Palmeiras", libertadores:3, mundial:0},
    {nome: "LDU", libertadores:1, mundial:0}
]

const resultado = clubes
.map(item => {
    
    return  {

    ...item,
    totalTitulos:item.libertadores+item.mundial
}

})


.filter(item => item.totalTitulos>=5)

.reduce((ac, n) => ac+n.totalTitulos,0)


console.log(resultado)
