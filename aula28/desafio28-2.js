/* Aula 28 — Nível 2
Relatório completo de vendedores */


function gerarRelatorio(lista){
    
    const resultado = lista.reduce((ac,item)=> {

        const vendedor = item.vendedor

        if(!ac.vendedores[vendedor]){
            ac.vendedores[vendedor]= {
                vendedor,
                total: 0
            }
        }
        ac.vendedores[vendedor].total += item.valor

        ac.totalGeral += item.valor

        return ac

    },{
        totalGeral: 0,
        vendedores:{}

    })

    resultado.vendedores = Object.values(resultado.vendedores)

    .sort((a,b)=> b.total-a.total)

    const melhorVendedor = resultado.vendedores[0]

    resultado.melhorVendedor = melhorVendedor
    

    return resultado

}

const vendas = [
    { vendedor: "Ana", valor: 4500 },
    { vendedor: "Joao", valor: 20000 },
    { vendedor: "Ana", valor: 1200 },
    { vendedor: "Carlos", valor: 800 },
    { vendedor: "Joao", valor: 900 },
    { vendedor: "Ana", valor: 1500 },
    { vendedor: "Carlos", valor: 100 }
]

const resultado = gerarRelatorio(vendas)



console.log(resultado)