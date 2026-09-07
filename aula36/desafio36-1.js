/* Desafio aula 36 - Nível 1   */

const vendas = [
    { vendedor: "Ana", valor: 4500 },
    { vendedor: "Joao", valor: 200 },
    { vendedor: "Carlos", valor: 800 },
    { vendedor: "Ana", valor: 1200 }
]


function existeVendaAlta(lista, valorMinimo) {

    return lista.some(item => item.valor>=valorMinimo)

}

console.log(existeVendaAlta(vendas,4000))

console.log(existeVendaAlta(vendas,5000))