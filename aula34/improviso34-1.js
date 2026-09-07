/* Improviso da aula 34 - nível 1 */


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
]

const resultado = maisVendido(vendasDoDia)

console.log(resultado)

function maisVendido(lista){

    const resultado = Object.values(lista.reduce((ac,item)=> {

        const vendedor = item.vendedor
        if(!ac[vendedor]){
            ac[vendedor] = {
                vendedor,
                produtos:{}
            }
        }

        const produto = item.produto
        if(!ac[vendedor].produtos[produto]){
            ac[vendedor].produtos[produto] = 0
        }

        ac[vendedor].produtos[produto]++



        return ac
        
        },{}))


        resultado.forEach(dados => {

            let maiorVenda = 0

            let produtoMaisVendido = ""


            Object.entries(dados.produtos).forEach(([produto,quantidade]) => {

                if(quantidade>maiorVenda){
                    maiorVenda = quantidade

                    produtoMaisVendido = produto
                }
            })


            dados.produtoMaisVendido = produtoMaisVendido

            delete dados.produtos


        })          

        
    
    return resultado
}


