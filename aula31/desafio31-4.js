/* Desafio da aula 31 - Nível 4 - Relatório completo por categoria   */


const vendas = [
    { vendedor: "Ana", categoria: "Eletrônicos", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", categoria: "Eletrônicos", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", categoria: "Móveis", produto: "Mesa", valor: 1500 },
    { vendedor: "Carlos", categoria: "Eletrônicos", produto: "Monitor", valor: 800 },
    { vendedor: "Joao", categoria: "Móveis", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", categoria: "Eletrônicos", produto: "TV", valor: 3200 }
]

const resultado = relatorioPorCategoria(vendas)

console.dir(resultado, {depth:null})

function relatorioPorCategoria(lista){

    const resultado = lista.reduce((ac,item)=> {

        const categoria = item.categoria
        if(!ac[categoria]){
            ac[categoria] = {
                totalCategoria: 0,
                vendedores:{}
            }
        }

        ac[categoria].totalCategoria += item.valor

        const vendedor = item.vendedor
        if(!ac[categoria].vendedores[vendedor]){
            ac[categoria].vendedores[vendedor]= {
                vendedor,
                quantidade:0,
                total: 0,
                maiorVenda:0,
                produtos: []
            }
        }

        const dados = ac[categoria].vendedores[vendedor] 

        dados.quantidade++
        dados.total += item.valor
        if(item.valor>dados.maiorVenda){
            dados.maiorVenda = item.valor
        }
        dados.produtos.push(item.produto)



        return ac

    },{})

    Object.keys(resultado).forEach(categoria => {
        resultado[categoria].ranking = Object.values(resultado[categoria].vendedores)
        .sort((a,b)=> b.total-a.total)
        resultado[categoria].melhorVendedor = resultado[categoria].ranking[0]
        delete resultado[categoria].vendedores
        
    })


    return resultado
    
}

