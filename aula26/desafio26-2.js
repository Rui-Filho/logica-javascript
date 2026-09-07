/* Agrupar e mostrar maior tudo em um único reduce   */


function mostrarMelhorVendedor(lista){
    return lista.reduce((ac,item)=> {
        const vendedor = item.vendedor
        ac.totais[vendedor]=(ac.totais[vendedor]||0)+item.valor

        const totalAtual = ac.totais[vendedor]  


        if(!ac.melhor || totalAtual > ac.melhor.total){
            ac.melhor = {
                vendedor: vendedor,
                total: totalAtual
            }
        }          

        return ac
    }, {
        totais:{},
        melhor:null
    })

}

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", produto: "Mesa", valor: 1500 },
    { vendedor: "Carlos", produto: "Mouse", valor: 100 }
]


const resultado = mostrarMelhorVendedor(vendas)

console.log(resultado)