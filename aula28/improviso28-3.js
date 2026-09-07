/* Improviso 28 - Nível 3    */



const clubes = [
    {clube:"Malta-BRA", competicao:"América", quantidade: 36},
    {clube:"Riverside-ARG", competicao:"América", quantidade:28},
    {clube:"GM-BRA", competicao:"América", quantidade:26},
    {clube:"Bremer-BRA", competicao:"América", quantidade:22},
    {clube:"RPA-BRA", competicao:"América", quantidade:17},
    {clube:"Valenciano-ARG", competicao:"América", quantidade:13},
    {clube:"SNN-BRA", competicao:"América", quantidade:11},
    {clube:"NuevoAires-ARG", competicao:"América", quantidade:10},
    {clube:"NuevoAires-ARG", competicao:"Liga Nacional", quantidade:50},
    {clube:"SNN-BRA", competicao:"Liga Nacional", quantidade:9},
    {clube:"Valenciano-ARG", competicao:"Liga Nacional", quantidade:37},
    {clube:"RPA-BRA", competicao:"Liga Nacional", quantidade:21},
    {clube:"Bremer-BRA", competicao:"Liga Nacional", quantidade:37},
    {clube:"GM-BRA", competicao:"Liga Nacional", quantidade:37},
    {clube:"Riverside-ARG", competicao:"Liga Nacional", quantidade:73},
    {clube:"Malta-BRA", competicao:"Liga Nacional", quantidade:57}
]

const resultado = rankingPorCompeticao(clubes)

console.log(resultado)


function rankingPorCompeticao(lista){
    const resultado =  lista.reduce((ac,item)=> {
        const competicao = item.competicao

        if(!ac[competicao]){
            ac[competicao]= {}
        }

        const clube = item.clube

        if(!ac[competicao][clube]){
            ac[competicao][clube] = {
                clube,
                total:0
            }
        }

        ac[competicao][clube].total += item.quantidade

        return ac

    },{})
    
    Object.keys(resultado).forEach(item => {

        resultado[item]=Object.values(resultado[item])

        .sort((a,b)=> b.total-a.total)
    })

    return resultado


}