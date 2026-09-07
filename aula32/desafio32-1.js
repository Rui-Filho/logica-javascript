/* Desafio 32 - Nível 2  */

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
                total:0,
                media:0,
            }
        }

        ac[vendedor].quantidade++
        ac[vendedor].total += item.valor

        return ac  
    },{}))

    resultado.forEach(vendedor => {
        vendedor.media = vendedor.total/vendedor.quantidade
    })

    

    return resultado
}

