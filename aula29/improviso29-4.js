/* Improviso do desafio 4 da aula 29 */

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

const resultado = gerarRelatorioDeClubes(clubes)



console.dir(resultado, {depth:null})

function gerarRelatorioDeClubes(dados){
    const resultado = dados.reduce((ac,item)=> {
        const competicao = item.competicao
        if(!ac[competicao]){
            ac[competicao]={
                totalCompeticao:0,
                clubes:{}
            }
        }

        const clube = item.clube
        if(!ac[competicao].clubes[clube]){
            ac[competicao].clubes[clube]= {
                clube,
                total:0
            }
        }

        ac[competicao].totalCompeticao += item.quantidade

        ac[competicao].clubes[clube].total += item.quantidade

        return ac

    }, {})

    Object.keys(resultado).forEach(competicao => {

        resultado[competicao].ranking = Object.values(resultado[competicao].clubes)

        .sort((a,b)=> b.total-a.total)

        delete resultado[competicao].clubes

        resultado[competicao].melhorClube = resultado[competicao].ranking[0]

    })


    return resultado
}