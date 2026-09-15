/* Aula 37 - Nível 2

Todas as venda de um vendedor específico atingem o valor mínimo?*/

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", produto: "Mesa", valor: 1500 }
]

function todasVendasDoVendedorAtingemMinimo(lista, nome, valorMinimo) {

    let vendasVendedor = lista.filter(item => item.vendedor===nome)

    return vendasVendedor.every(item => item.valor>=valorMinimo)

}

console.log(
    todasVendasDoVendedorAtingemMinimo(vendas, "Ana", 1000)
)

console.log(
    todasVendasDoVendedorAtingemMinimo(vendas, "Ana", 2000)
)

