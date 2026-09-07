/* Desafio Aula 34 - Nível 2   */


const vendas = [
    { vendedor: "Ana", produto: "Notebook" },
    { vendedor: "Joao", produto: "Mouse" },
    { vendedor: "Ana", produto: "Notebook" },
    { vendedor: "Carlos", produto: "Teclado" },
    { vendedor: "Joao", produto: "Mouse" },
    { vendedor: "Ana", produto: "Mesa" }
]

const resultado = relatorio(vendas)

console.log(resultado)

function relatorio(lista){

    const resultado = Object.values(lista.reduce((ac,item)=> {

        const vendedor = item.vendedor
        if(!ac[vendedor]){
            ac[vendedor] = {
                vendedor,
                quantidade:0,
                produtos:{}
                
            }
        }

        ac[vendedor].quantidade++

        const produto = item.produto
        if(!ac[vendedor].produtos[produto]){
            ac[vendedor].produtos[produto]= 0
        }

        ac[vendedor].produtos[produto]++




        return ac

    },{}))


    resultado.forEach(dados => {
        let maiorQuantidade = 0;

        let produtoMaisVendido = ""

        Object.entries(dados.produtos).forEach(([produto,quantidade])=> {
            if(quantidade>maiorQuantidade){

                maiorQuantidade = quantidade

                produtoMaisVendido = produto
            }
        })

        dados.produtoMaisVendido = produtoMaisVendido

        dados.qunatidadeProdutoMaisVendido = maiorQuantidade
        
        delete dados.produtos
    })





    return resultado



}