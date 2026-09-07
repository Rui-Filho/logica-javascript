/* Aula 31 - Nível 2   */ 

const vendas = [
    { vendedor: "Ana", valor: 4500 },
    { vendedor: "Joao", valor: 200 },
    { vendedor: "Ana", valor: 1200 },
    { vendedor: "Carlos", valor: 800 },
    { vendedor: "Joao", valor: 900 },
    { vendedor: "Ana", valor: 1500 }
]

const resultado = gerarRelatorio(vendas)

console.log(resultado)

function gerarRelatorio(lista){
    const resultado = Object.values(lista.reduce((ac,item)=> {

        const vendedor = item.vendedor
        if(!ac[vendedor]) {
            ac[vendedor] = {
                vendedor,
                quantidade:0,
                maiorVenda: 0,
            }
        }

        ac[vendedor].quantidade++

        if(item.valor>ac[vendedor].maiorVenda){
            ac[vendedor].maiorVenda = item.valor
        }

        return ac

    },{}))

    return resultado

}