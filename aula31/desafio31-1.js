/* Aula 31 - Nível 01  */


const vendas = [
    { vendedor: "Ana", valor: 4500 },
    { vendedor: "Joao", valor: 200 },
    { vendedor: "Ana", valor: 1200 },
    { vendedor: "Carlos", valor: 800 },
    { vendedor: "Joao", valor: 900 },
    { vendedor: "Rui", valor: 900 },
    { vendedor: "Rui", valor: 1200 },
    { vendedor: "Joao", valor: 950 },
    { vendedor: "Ana", valor: 1700 }
    
]


const resultado = maiorVenda(vendas)

console.log(resultado)

function maiorVenda(lista){
    const resultado = Object.values(lista.reduce((ac,item)=> {

        const vendedor = item.vendedor
        if(!ac[vendedor]){
            ac[vendedor] = {
                vendedor,
                maiorVenda:0
            }
        }

        if(item.valor>ac[vendedor].maiorVenda){
            ac[vendedor].maiorVenda = item.valor
        }

        return ac

    },{}))

    return resultado
}