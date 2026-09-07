/* Desafio nível 3 - Aula 30   */

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", produto: "Mesa", valor: 1500 }
]


const resultado = relatorio(vendas)

console.dir(resultado,{depth:null})

function relatorio(lista){

    const resultado = lista.reduce((ac,item)=> { 

        ac.totalGeral += item.valor

        const vendedor = item.vendedor
        if(!ac.vendedores[vendedor]){
            ac.vendedores[vendedor]={
                vendedor,
                quantidade:0,
                total:0,
                produtos:[]
            }
        }

        ac.vendedores[vendedor].quantidade++

        ac.vendedores[vendedor].total += item.valor

        ac.vendedores[vendedor].produtos.push(item.produto)



        return ac

    },{
        totalGeral:0,
        vendedores:{}
    })

    resultado.ranking = Object.values(resultado.vendedores)

    .sort((a,b)=> b.total-a.total)

    resultado.melhorVendedor = resultado.ranking[0]

    delete resultado.vendedores

    



    

    return resultado

}