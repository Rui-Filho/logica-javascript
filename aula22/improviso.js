const clubes = [
    {clube: "Gremio", libertadores:3, copaDoBrasil:5,brasileiro:2,mundial:1},
    {clube: "Flamengo", libertadores:4, copaDoBrasil:5,brasileiro:8,mundial:1},
    {clube:"Internacional", libertadores:2, copaDoBrasil:1,brasileiro:3, mundial:1},
    {clube: "Cruzeiro", libertadores:2, copaDoBrasil:6, brasileiro:4,mundial:0},
    {clube: "Atletico-MG", libertadores:1, copaDoBrasil:2, brasileiro:3,mundial:0},
    {clube: "São Paulo", libertadores:3, copaDoBrasil:1, brasileiro:6,mundial:3},
    {clube: "Corinthians", libertadores:1, copaDoBrasil:4, brasileiro:7,mundial:2}
]

const resultado = clubes
.map(item => ({
    ...item,
    totalTitulos:item.libertadores+item.brasileiro+item.copaDoBrasil+item.mundial

}))
.filter(item=>item.totalTitulos>=10)
.reduce((ac,n) => {
    ac.somaTitulos += n.totalTitulos
    ac.quantosClubes += 1
    return ac
},{
    somaTitulos:0,
    quantosClubes:0
})




console.log(resultado)