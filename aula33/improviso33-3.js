/* Improviso da aula 33 de nível 3   */

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

        ac.totalCategoria += item.valor

        const vendedor = item.vendedor
        if(!ac.dadosVendedores[vendedor]){
            ac.dadosVendedores[vendedor] = {
                vendedor,
                quantidade: 0,
                total: 0,
                maiorVenda:item.valor,
                menorVenda: item.valor,
                produtos:[]
            }
        }
        
        const dados = ac.dadosVendedores[vendedor]
        dados.quantidade++
        dados.total += item.valor
        if(item.valor>dados.maiorVenda){
            dados.maiorVenda = item.valor
        }
        if(item.valor<dados.menorVenda){
            dados.menorVenda = item.valor
        }
        dados.produtos.push(item.produto)

        return ac

    },{
        totalCategoria:0,
        dadosVendedores:{}
    })

    resultado.ranking = Object.values(resultado.dadosVendedores)

    resultado.ranking.forEach(dados => {
        dados.media = dados.total/dados.quantidade        
    })

    resultado.ranking.sort((a,b)=> b.total-a.total)

    resultado.melhorVendedor = resultado.ranking[0]

    delete resultado.dadosVendedores

    return resultado
}


