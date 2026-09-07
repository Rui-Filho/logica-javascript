// Desafio 32 - Nível 3


const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", produto: "Mesa", valor: 1500 }
]

const resultado = relatorio(vendas)

console.dir(resultado,{depth:null})

function relatorio(lista){
    const resultado = lista.reduce((ac,item)=> {

        ac.totalGeral += item.valor

        const vendedor = item.vendedor
        if(!ac.dadosVendedores[vendedor]){
            ac.dadosVendedores[vendedor] = {
                vendedor,
                quantidade:0,
                total:0,
                maiorVenda: 0,
                media:0,
                produtos:[]
            }
        }

        const dados = ac.dadosVendedores[vendedor]
        dados.quantidade++
        dados.total += item.valor
        if(item.valor>dados.maiorVenda){
            dados.maiorVenda = item.valor
        }
        dados.produtos.push(item.produto)



        return ac


    },{
        totalGeral:0,
        dadosVendedores:{}
    })

    resultado.ranking = Object.values(resultado.dadosVendedores)

    delete resultado.dadosVendedores
       

    resultado.ranking.forEach(dados => {
        dados.media = dados.total/dados.quantidade 
            
    })

    resultado.ranking.sort((a,b)=> b.total-a.total)

    resultado.melhorVendedor = resultado.ranking[0]
    

    

    return resultado
}

