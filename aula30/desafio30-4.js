 /* Desafio 30 - nível 4 */

 const vendas = [
    { vendedor: "Ana", categoria: "Eletrônicos", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", categoria: "Eletrônicos", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", categoria: "Móveis", produto: "Mesa", valor: 1500 },
    { vendedor: "Carlos", categoria: "Eletrônicos", produto: "Monitor", valor: 800 },
    { vendedor: "Joao", categoria: "Móveis", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", categoria: "Eletrônicos", produto: "TV", valor: 3200 }
]


const resultado = relatorio(vendas)

console.dir(resultado, {depth:null})

function relatorio(lista){

    const resultado = lista.reduce((ac,item)=> {
        const categoria = item.categoria
        if(!ac[categoria]){
            ac[categoria] = {
                totalCategoria: 0,
                vendedores:{}
            }
        }

        ac[categoria].totalCategoria += item.valor

        const vendedor = item.vendedor
        if(!ac[categoria].vendedores[vendedor]){
            ac[categoria].vendedores[vendedor] = {
                vendedor,
                quantidade:0,
                total:0,
                produtos:[]

            }
        }

        ac[categoria].vendedores[vendedor].quantidade++

        ac[categoria].vendedores[vendedor].total += item.valor

        ac[categoria].vendedores[vendedor].produtos.push(item.produto)             


        return ac

    },{})

    Object.keys(resultado).forEach(categoria => {

        resultado[categoria].ranking = Object.values(resultado[categoria].vendedores)

        .sort((a,b) => b.total-a.total)

        delete resultado[categoria].vendedores

        resultado[categoria].melhorVendedor = resultado[categoria].ranking[0]
    })

    




    return resultado

}