/* improviso nivel 2 - aula 26 - fazendo tudo do nivel 1 dentro de apenas um reduce: Agrupando por campo; somando valores totais; e mostrando qual o maior ou melhor   */

function somandoeMostrandoMaior(lista){

    return lista.reduce((ac, item)=> {
        const clube = item.clube      

             

        ac.total[clube] = (ac.total[clube]||0)+item.quantidade

        const totalAtual = ac.total[clube]    

       

        if(!ac.melhor||totalAtual>ac.melhor.total){
            ac.melhor = {
                clube: clube,
                total: totalAtual
            }
        }              
        

        return ac

    }, {
        total:{},
        melhor:null
    })

}


const tresMelhores = [
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

const resultado = somandoeMostrandoMaior(tresMelhores)

console.log(resultado)