/* Desafio 34 - Aula 3   */

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Mesa", valor: 1500 }
]

const resultado  = relatorio(vendas)

console.log(resultado)

function relatorio(lista){

    const resultado = Object.values(lista.reduce((ac,item)=> {

        const vendedor = item.vendedor
        if(!ac[vendedor]){
            ac[vendedor] = {
                vendedor,
                quantidade:0,
                total:0,
                produtos: {}
            }
        }

        ac[vendedor].quantidade++
        ac[vendedor].total += item.valor

        const produto = item.produto
        if(!ac[vendedor].produtos[produto]){
            ac[vendedor].produtos[produto]=0
        }
        ac[vendedor].produtos[produto]++


        return ac

    },{}))

    resultado.forEach(dados => {

        let produtoMaisVendido = ""

        let quantidadeProdutoMaisVendido = 0

        Object.entries(dados.produtos).forEach(([produto,quantidade]) => {

            if(quantidade > quantidadeProdutoMaisVendido){

                quantidadeProdutoMaisVendido = quantidade

                produtoMaisVendido = produto
            }
        })

        dados.produtoMaisVendido = produtoMaisVendido

        dados.quantidadeProdutoMaisVendido = quantidadeProdutoMaisVendido

        delete dados.produtos        

    })



    return resultado

}


