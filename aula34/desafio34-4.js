/* Aula 34 - Nível 4*/


const vendas = [
    { vendedor: "Ana", categoria: "Eletrônicos", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", categoria: "Eletrônicos", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", categoria: "Móveis", produto: "Mesa", valor: 1500 },
    { vendedor: "Carlos", categoria: "Eletrônicos", produto: "Monitor", valor: 800 },
    { vendedor: "Joao", categoria: "Móveis", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", categoria: "Eletrônicos", produto: "Notebook", valor: 4500 },
   
]

const resultado = relatorio(vendas)

console.dir(resultado,{depth:null})

function relatorio(lista){

    const resultado = lista.reduce((ac,item)=> {

        const categoria = item.categoria
        if(!ac[categoria]){
            ac[categoria] = {
                totalCategoria:0,
                dadosVendedores: {}
            }
        }
        ac[categoria].totalCategoria += item.valor

        const vendedor = item.vendedor
        if(!ac[categoria].dadosVendedores[vendedor]){
            ac[categoria].dadosVendedores[vendedor] = {
                vendedor,
                quantidade:0,
                total:0,
                produtos:{},
            }
        }
        const dados = ac[categoria].dadosVendedores[vendedor]
        dados.quantidade++
        dados.total += item.valor

        const produto = item.produto
        if(!dados.produtos[produto]){
            dados.produtos[produto] = 0
        }
        dados.produtos[produto]++


        return ac

    },{})


    

    Object.keys(resultado).forEach(categoria => {

        resultado[categoria].ranking = Object.values(resultado[categoria].dadosVendedores)


        resultado[categoria].ranking.forEach(dados => {

             let produtoMaisVendido = ""

             let quantidadeProdutoMaisVendido = 0

            Object.entries(dados.produtos).forEach(([produto,quantidade]) => {               

                if(quantidade>quantidadeProdutoMaisVendido){
                    quantidadeProdutoMaisVendido = quantidade

                    produtoMaisVendido = produto
                }

            })

            dados.produtoMaisVendido = produtoMaisVendido

            dados.quantidadeProdutoMaisVendido = quantidadeProdutoMaisVendido

            delete dados.produtos

        })

        

        resultado[categoria].ranking.sort((a,b)=> b.total-a.total)

        resultado[categoria].melhorVendedor = resultado[categoria].ranking[0]



        delete resultado[categoria].dadosVendedores


    })


    return resultado



}