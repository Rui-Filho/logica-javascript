/* Desafio 29 - nível 3 - Relatórios dos melhores vendedores */

const vendas = [
    { vendedor: "Ana", valor: 4500 },
    { vendedor: "Joao", valor: 200 },
    { vendedor: "Ana", valor: 1200 },
    { vendedor: "Carlos", valor: 800 },
    { vendedor: "Joao", valor: 900 },
    { vendedor: "Ana", valor: 1500 }
]

const resultado = gerarRelatorio(vendas)

console.log(resultado)

function gerarRelatorio(lista){

    const resultado = lista.reduce((ac,item)=> {
        ac.totalGeral += item.valor

        const vendedor = item.vendedor
        if(!ac.vendedores[vendedor]){
            ac.vendedores[vendedor] = {
                vendedor,
                total:0,
            }
        }

        ac.vendedores[vendedor].total += item.valor

        return ac

    }, {
        totalGeral:0,
        vendedores:{},
    })

    resultado.ranking = Object.values(resultado.vendedores)

    .sort((a,b)=> b.total-a.total)

    resultado.melhorVendedor = resultado.ranking[0]

    delete resultado.vendedores


    return resultado



}

