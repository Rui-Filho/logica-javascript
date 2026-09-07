/*  improviso do exercício nível 02 da aula 34   */


const vendasDoDia = [
    {vendedor:"Rui",produto:"Notebook"},
    {vendedor:"Lucio", produto:"PS4"},
    {vendedor:"Laura", produto:"Monitor"},
    {vendedor:"Rui", produto:"Notebook"},
    {vendedor:"Rui",produto:"Notebook"},
    {vendedor:"Lucio", produto:"PS4"},
    {vendedor:"Laura", produto:"Monitor"},
    {vendedor:"Rui", produto:"Monitor"},
    {vendedor:"Rui",produto:"Notebook"},
    {vendedor:"Lucio", produto:"Mouse"},
    {vendedor:"Laura", produto:"PS4"},
    {vendedor:"Rui", produto:"Monitor"},
    {vendedor:"Rui",produto:"Notebook"},
    {vendedor:"Lucio", produto:"PS5"},
    {vendedor:"Laura", produto:"PS5"},
    {vendedor:"Rui", produto:"Mesa"},
    {vendedor:"Laura", produto:"Monitor"},
    {vendedor:"Rui", produto:"Monitor"},
    {vendedor:"Rui",produto:"Mouse"},
    {vendedor:"Lucio", produto:"PS4"},
    {vendedor:"Laura", produto:"PS4"},
    {vendedor:"Rui", produto:"Mesa"},
    {vendedor:"Rui",produto:"Notebook"},
    {vendedor:"Lucio", produto:"PS4"},
    {vendedor:"Laura", produto:"Monitor"},
    {vendedor:"Rui", produto:"Mouse"},
]

const resultado = relatorio(vendasDoDia)

console.log(resultado)

function relatorio(lista){
    const resultado = Object.values(lista.reduce((ac,item)=> {

        const vendedor = item.vendedor
        if(!ac[vendedor]) {
            ac[vendedor] = {
                vendedor,
                quantidade:0,
                produtos:{},

            }
        }

        ac[vendedor].quantidade++

        const produto = item.produto
        if(!ac[vendedor].produtos[produto]){
            ac[vendedor].produtos[produto]=0
        }

        ac[vendedor].produtos[produto]++


        return ac

    },{}))



    resultado.forEach( dados => {

        let maiorQuantidade = 0 

        let produtoMaisVendido = ""

        Object.entries(dados.produtos).forEach(([produto,quantidade])=> {
            if(quantidade>maiorQuantidade){

                maiorQuantidade = quantidade

                produtoMaisVendido = produto

            }
        })


        dados.produtoMaisVendido = produtoMaisVendido

        dados.quantidadeDoProdutoMaisVendido = maiorQuantidade

        delete dados.produtos

    })

    

    

    return resultado
}
