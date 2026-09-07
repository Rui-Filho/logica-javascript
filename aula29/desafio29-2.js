/* Aula 29 - Desafio nível 2   */


const vendas = [
    { vendedor: "Ana", valor: 4500 },
    { vendedor: "Joao", valor: 200 },
    { vendedor: "Ana", valor: 1200 },
    { vendedor: "Carlos", valor: 800 },
    { vendedor: "Joao", valor: 900 },
    { vendedor: "Ana", valor: 1500 }
]

const resultado  = doisMelhores(vendas)

console.log(resultado)

function doisMelhores(lista){
    const resultado = Object.values(lista.reduce((ac,item)=> {

        const vendedor = item.vendedor
        if(!ac[vendedor]) {
            ac[vendedor] = {
                vendedor,
                total:0
            }
        }

        ac[vendedor].total += item.valor

        return ac   

    },{}))

    .sort((a,b)=> b.total-a.total)

    .slice(0,2)

    return resultado
}

