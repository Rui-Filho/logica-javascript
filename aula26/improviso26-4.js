
function melhorClube(lista){

    const resultado = lista.reduce((ac,item)=> {
        const clube = item.clube
        ac.totais[clube]= (ac.totais[clube]||0)+item.quantidade
        const quantidadeTotal = ac.totais[clube]

        if(!ac.melhor||quantidadeTotal>ac.melhor.total){
            ac.melhor = {
                clube,
                total: quantidadeTotal
            }
        }

        return ac

    },{
        totais: {},
        melhor: null
    })

    return resultado.melhor

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

const resultado = melhorClube(clubes)

console.log(resultado)