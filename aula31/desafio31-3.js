/* Desafio 31 - Nível 3   */

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", produto: "Mesa", valor: 1500 }
]

const resultado = relatorioCompleto(vendas)


console.dir(resultado, {depth:null})


function relatorioCompleto(lista){
    
    const resultado = lista.reduce((ac,item)=> {

        ac.totalGeral += item.valor        

        const vendedor = item.vendedor
        

        if(!ac.vendedores[vendedor]){
            ac.vendedores[vendedor]= {
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
        vendedores: {}
    })

    resultado.ranking = Object.values(resultado.vendedores)

    .sort((a,b)=> b.total-a.total)

    resultado.melhorVendedor = resultado.ranking[0]

    delete resultado.vendedores

    return resultado
}