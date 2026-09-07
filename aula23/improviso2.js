/* Improviso para treinar a estrutura de reduce customizado: com regra fora da função;regra determinada na chamada na função  */


function somar(lista,regra,inicial){
    return lista.reduce((ac,item)=> {
        return regra(ac,item)
    } , inicial)
}




const temporada = [
    {clube: "Malta",apex:0, nacional:57},
    {clube: "Bremer", apex:3, nacional:37},
    {clube: "Independiente BA", apex:2, nacional:17}
]

const resultado = somar(temporada, (ac,n) => {
    ac.total += n.apex+n.nacional
    ac.quantidade ++
    return ac
}, {
    total:0,
    quantidade:0
})

console.log(resultado)