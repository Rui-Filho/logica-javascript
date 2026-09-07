/* IMPROVISANDO PARA TREINAR A MECÂNICA   */


const temporada = [
    {clube: "Malta",superLiga:57,copaDoBrasil:29,superCopa:29},
    {clube:"Bremer", superLiga:37,copaDoBrasil:21, superCopa:20},
    {clube:"GM", superLiga:36, copaDoBrasil:14, superCopa:13},
    {clube:"RPA", superLiga:21, copaDoBrasil:11, superCopa:15},
    {clube:"Industrial", superLiga:18, copaDoBrasil:14, superCopa:6},
    {clube:"Guanabara", superLiga:14, copaDoBrasil:14, superCopa:5},
    {clube:"Racing Fussball", superLiga:8, copaDoBrasil:23, superCopa:6},
    {clube:"SNN", superLiga:9, copaDoBrasil:13, superCopa:5}
]

const resultado= temporada
.map(item => ({      
    ...item,
    totalNacionais:item.superLiga+item.copaDoBrasil+item.superCopa    
    
}))
.filter(item => item.totalNacionais>=30)
.reduce((ac,item)=> {
    ac.totalGlobal += item.totalNacionais
    ac.quantidadeClubes += 1
    return ac
}, {
    totalGlobal:0,
    quantidadeClubes:0
}
)

console.log(resultado)