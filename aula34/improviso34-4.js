/* Improviso 34 - 4  */

const vendas = [
    { vendedor: "Rui",categoria: "Eletrônicos", produto: "Smartv", valor: 3800 },
    { vendedor: "Claudio",categoria: "Eletrônicos", produto: "PS5", valor: 5400 },
    { vendedor: "Ana",categoria: "Móveis", produto: "Estante", valor: 1200 },
    { vendedor: "Carlos", categoria: "Eletrônicos",produto: "PS4", valor: 2800 },
    { vendedor: "Rui", categoria: "Eletrônicos",produto: "Notebook", valor: 3200 },
    { vendedor: "Ana", categoria: "Móveis", produto: "Mesa", valor: 1500 },
    { vendedor: "Ana",categoria: "Eletrônicos", produto: "Notebook", valor: 4500 },
    { vendedor: "Claudio",categoria: "Eletrônicos", produto: "Mouse", valor: 200 },
    { vendedor: "Francisco", categoria: "Eletrônicos",produto: "Celular", valor: 1200 },
    { vendedor: "Carlos", categoria: "Eletrônicos",produto: "Teclado", valor: 800 },
    { vendedor: "Joao", categoria: "Móveis",produto: "Cadeira", valor: 900 },
    { vendedor: "Rui", categoria: "Móveis",produto: "Mesa", valor: 1500 },
    { vendedor:"Carlos", categoria: "Eletrônicos",produto:"PS5", valor:5000},
    { vendedor: "Rui", categoria: "Eletrônicos",produto: "PS4", valor: 2700 },
    {vendedor:"Joao", categoria: "Eletrônicos",produto:"PS5", valor:5000},
    {vendedor:"Fabiano", categoria:"Eletrônicos", produto:"Notebook", valor:3400},
    {vendedor:"Rui", categoria:"Eletrônicos", produto:"Notebook", valor:3200},
    {vendedor:"Ana", categoria:"Eletrônicos", produto:"PS4", valor:1800},
    {vendedor:"Estremecérios", categoria:"Eletrônicos", produto:"Soundbar-Samsung", valor:3100},
    {vendedor:"Carlos", categoria:"Eletrônicos", produto:"Smartv-32", valor:1100},
    {vendedor:"Fabiano", categoria:"Eletrônicos", produto:"Monitor", valor:2700},

]

const resultado = relatorio(vendas)

console.dir(resultado,{depth:null})

function relatorio(lista){

    const resultado = lista.reduce((ac,item) => {

        const categoria = item.categoria
        if(!ac[categoria]){
            ac[categoria] = {
                totalCategoria:0,
                dadosVendedores:{}    
            }
        }
        ac[categoria].totalCategoria += item.valor


        const vendedor = item.vendedor
        if(!ac[categoria].dadosVendedores[vendedor]){
            ac[categoria].dadosVendedores[vendedor] = {
                vendedor,
                quantidade:0,
                total:0,
                produtos:{}
            }
        }

        const dados = ac[categoria].dadosVendedores[vendedor]
        dados.quantidade++
        dados.total += item.valor

        const produto = item.produto
        if(!dados.produtos[produto]){
            dados.produtos[produto]=0
        }
        dados.produtos[produto]++


        return ac

    },{})


    //aninhamento de métodos foreach para cada nível

    Object.keys(resultado).forEach( categoria => { //primeiro


        resultado[categoria].ranking = Object.values(resultado[categoria].dadosVendedores)


        resultado[categoria].ranking.forEach(vendedor => {  //segundo

            let produtoMaisVendido = ""

            let quantidadeProdutoMaisVendido = 0


            Object.entries(vendedor.produtos).forEach(([produto,quantidade]) => { //terceiro


                if(quantidade>quantidadeProdutoMaisVendido) {
                    
                    quantidadeProdutoMaisVendido = quantidade

                    produtoMaisVendido = produto
                
                }


            })

            vendedor.produtoMaisVendido = produtoMaisVendido

            vendedor.quantidadeProdutoMaisVendido = quantidadeProdutoMaisVendido

            delete vendedor.produtos


        })

        resultado[categoria].ranking.sort((a,b)=> b.total-a.total)

        resultado[categoria].melhorVendedor = resultado[categoria].ranking[0]



        delete resultado[categoria].dadosVendedores

    })



    return resultado

    

}