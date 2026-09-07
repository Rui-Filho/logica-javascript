/* Revisão abstração + composição de funções + acesso dinamico a propriedades  */


function adicionarTotal(lista,propriedade,calculo){
    return lista.map(item => {
        return {
            ...item,
            [propriedade]:calculo(item)
        }
    })
}

function filtrar(lista,criterio){
    return lista.filter(item => criterio(item))
}

function resumir(lista, propriedade){
    return lista.reduce((ac,item)=> {
        ac.totalGlobal += item[propriedade]
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

const resultado = resumir(
filtrar(
adicionarTotal(temporada,"totalNacional", item => item.superLiga+item.copaDoBrasil+item.superCopa),item => item.totalNacional>=40
), "totalNacional"
)

console.log(resultado)



