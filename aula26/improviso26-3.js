

function doisMelhores(lista){
    return Object.values(
    lista.reduce((ac,item)=> {
        const clube = item.clube
        if(!ac[clube]){
            ac[clube] = {
                clube,
                totalTitulos:0
            }
        }

        ac[clube].totalTitulos += item.quantidade

        return ac

    },{})
)
.sort((a,b)=> b.totalTitulos-a.totalTitulos)
.slice(0,2)

}

const clubes = [
    {clube:"Malta", titulo:"america", quantidade:36},
    {clube:"Riverside", titulo:"nacional", quantidade:73},
    {clube:"GM", titulo:"mundial", quantidade:8},
    {clube:"Riverside", titulo:"america", quantidade:28},
    {clube:"GM", titulo:"america", quantidade:26},
    {clube:"Malta", titulo:"nacional", quantidade:57},
    {clube:"Malta", titulo:"mundial", quantidade:18},
    {clube:"GM", titulo:"nacional", quantidade:36},
    {clube:"Riverside", titulo:"mundial", quantidade:7}
]

const resultado = doisMelhores(clubes)

console.log(resultado)