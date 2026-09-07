/* Improviso do exercício 31    */

const vendas = [
    { vendedor: "Rui", produto: "Smartv", valor: 3800 },
    { vendedor: "Claudio", produto: "PS5", valor: 5400 },
    { vendedor: "Ana", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "PS4", valor: 2800 },
    { vendedor: "Rui", produto: "Notebook", valor: 3200 },
    { vendedor: "Ana", produto: "Mesa", valor: 1500 },
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Claudio", produto: "Mouse", valor: 200 },
    { vendedor: "Francisco", produto: "Celular", valor: 1200 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Cadeira", valor: 900 },
    { vendedor: "Rui", produto: "Mesa", valor: 1500 },
    { vendedor:"Carlos", produto:"PS5", valor:5000},
    { vendedor: "Rui", produto: "PS4", valor: 2700 },
    {vendedor:"Joao", produto:"PS5", valor:5000}
]

const resultado = relatorio(vendas)

console.dir(resultado,{depth:null})

function relatorio(lista){
    const resultado = lista.reduce((ac,item)=> {

        ac.totalGeral += item.valor

        const vendedor = item.vendedor
        if(!ac.vendedores[vendedor]){
            ac.vendedores[vendedor] = {

                vendedor,
                quantidade:0,
                total:0,
                maiorVenda:0,
                produtos: []

            }
        }

        const dados = ac.vendedores[vendedor]

        dados.quantidade++
        dados.total += item.valor
        if(item.valor>dados.maiorVenda){
            dados.maiorVenda = item.valor
        }
        dados.produtos.push(item.produto)



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


