/* Improviso nível 04 - aula 30  */


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
    {vendedor:"Joao", categoria: "Eletrônicos",produto:"PS5", valor:5000}
]

const resultado = relatorio(vendas)

console.dir(resultado,{depth:null})

function relatorio(lista) {

    const resultado = lista.reduce((ac,item)=> {

        const categoria = item.categoria
        if(!ac[categoria]){
            ac[categoria] = {
                totalCategoria:0,
                vendedores: {}
            }
        }

        ac[categoria].totalCategoria += item.valor

        const vendedor = item.vendedor
        if(!ac[categoria].vendedores[vendedor]){
            ac[categoria].vendedores[vendedor] = {
                vendedor,
                quantidade: 0,
                total:0,
                produtos: []
            }
        }

        ac[categoria].vendedores[vendedor].quantidade++

        ac[categoria].vendedores[vendedor].total += item.valor

        ac[categoria].vendedores[vendedor].produtos.push(item.produto)

        return ac

    },{})

    Object.keys(resultado).forEach(categoria => {

        resultado[categoria].ranking = Object.values(resultado[categoria].vendedores)

        .sort((a,b)=> b.total-a.total)

        delete resultado[categoria].vendedores

        resultado[categoria].melhorVendedor = resultado[categoria].ranking[0]

    })

    return resultado

}