/* Aula 37 - Desafio 1  */

const vendas = [
    { vendedor: "Ana", valor: 4500 },
    { vendedor: "Joao", valor: 200 },
    { vendedor: "Carlos", valor: 800 },
    { vendedor: "Ana", valor: 1200 }
]

function todasVendasAtingemMinimo(lista, valorMinimo) {

    return lista.every(item => item.valor>=valorMinimo)

}

console.log(todasVendasAtingemMinimo(vendas, 100))

console.log(todasVendasAtingemMinimo(vendas, 1000))