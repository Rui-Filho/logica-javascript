
/* Refazendo exercícios na revisão posterior 18/03/26  */

/* COMPOSIÇÃO DE FUNÇÕES */


function somarNacionais(lista){
    return lista.map(item => ({
        ...item,
        totalNacional:item.superLiga+item.copaDoBrasil+item.superCopa

    }))
}

function filtrarMaior(lista){
    return lista.filter(item => item.totalNacional>=40)

}

function resumir(lista){
    return lista.reduce((ac, item)=> {
        ac.totalGlobal += item.totalNacional
        ac.quantidadeClubes ++
        return ac
    }, {
        totalGlobal:0,
        quantidadeClubes:0
    })
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

/* Composição de funções: Chamando várias funções de uma só vez, dentro uma variável utilizando composição (Uma função dentro de outra) */
const resultado = resumir(
filtrarMaior(
somarNacionais(temporada)
)
)

console.log(resultado)