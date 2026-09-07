/* Improviso aula 31 - Nível 4   */

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
    const resultado = lista.reduce((ac,item)=> {

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
                total: 0,
                maiorVenda: 0,
                produtos: [],

            }
        }
        const dados = ac[categoria].dadosVendedores[vendedor]
        dados.quantidade++
        dados.total += item.valor
        if(item.valor>dados.maiorVenda){
            dados.maiorVenda = item.valor
        }
        dados.produtos.push(item.produto)
        

        return ac

    },{})

    Object.keys(resultado).forEach(categoria => {
        const dados = resultado[categoria]
        dados.ranking = Object.values(dados.dadosVendedores)
        .sort((a,b)=> b.total-a.total)
        dados.melhorVendedor = dados.ranking[0]
        delete dados.dadosVendedores
    })


    return resultado
}


