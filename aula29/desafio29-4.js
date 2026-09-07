/* Desafio nível 4 - aula 29  */

const vendas = [
    { vendedor: "Ana", categoria: "Eletrônicos", valor: 4500 },
    { vendedor: "Joao", categoria: "Eletrônicos", valor: 200 },
    { vendedor: "Ana", categoria: "Móveis", valor: 1200 },
    { vendedor: "Carlos", categoria: "Eletrônicos", valor: 800 },
    { vendedor: "Joao", categoria: "Móveis", valor: 900 },
    { vendedor: "Ana", categoria: "Eletrônicos", valor: 1500 }
]

const resultado = gerarRelatorio(vendas)

console.dir(resultado,{depth:null})

function gerarRelatorio(lista){

    const resultado = lista.reduce((ac,item)=> {

        const categoria = item.categoria
        if(!ac[categoria]){
            ac[categoria]={
                totalCategoria:0,
                vendedores:{}
            }
        }
        ac[categoria].totalCategoria += item.valor

        const vendedor = item.vendedor
        if(!ac[categoria].vendedores[vendedor]){
            ac[categoria].vendedores[vendedor]={
                vendedor,
                total:0
            }
        }

        ac[categoria].vendedores[vendedor].total += item.valor

        return ac

    },{})

    /* Revisar bem o que está dentro do for..Each, e depois fazer um improviso  */

    Object.keys(resultado).forEach(categoria => {
        
        resultado[categoria].ranking = Object.values(resultado[categoria].vendedores)

        .sort((a,b)=> b.total-a.total)

        delete resultado[categoria].vendedores

        resultado[categoria].melhorVendedor = resultado[categoria].ranking[0]
        
    })

    return resultado

}