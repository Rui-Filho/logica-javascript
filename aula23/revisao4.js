/* REvisão do reduce customizado, informando regra na chamada da função  


function resumir(lista,regra,inicial){
    return lista.reduce((ac,item)=> {
        return regra(ac,item)
    },inicial)
}

*/

/* Versão simplificada:*/

function resumir(lista,regra,inicial){
return lista.reduce(regra,inicial)

}






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

const resultado = resumir(temporada, (ac,item)=> {
    ac.totalNacional += item.superLiga+item.copaDoBrasil+item.superCopa
    ac.quantidadeClubes ++
    return ac
},{
    totalNacional:0,
    quantidadeClubes:0

})


console.log(resultado)