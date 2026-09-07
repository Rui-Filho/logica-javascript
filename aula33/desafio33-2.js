// Desafio aula 33 - nível 2


const vendas = [
    { vendedor: "Ana", valor: 4500 },
    { vendedor: "Joao", valor: 200 },
    { vendedor: "Ana", valor: 1200 },
    { vendedor: "Carlos", valor: 800 },
    { vendedor: "Joao", valor: 900 },
    { vendedor: "Ana", valor: 1500 }
]

const resultado = relatorio(vendas)

console.log(resultado)

function relatorio(lista){
    const resultado = Object.values(lista.reduce((ac,item)=> {
        const vendedor = item.vendedor
        if(!ac[vendedor]){
            ac[vendedor] = {
                vendedor,
                quantidade:0,
                maiorVenda:item.valor,
                menorVenda:item.valor,
            }
        }

        ac[vendedor].quantidade++
        if(item.valor>ac[vendedor].maiorVenda){
            ac[vendedor].maiorVenda = item.valor
        }
        if(item.valor<ac[vendedor].menorVenda){
            ac[vendedor].menorVenda = item.valor
        }


        return ac

    },{}))


    return resultado

}