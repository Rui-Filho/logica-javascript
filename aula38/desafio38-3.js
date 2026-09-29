/* Aula 38 - Nível 3  */

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 3500 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Ana", produto: "Mouse", valor: 500 },
    { vendedor: "Joao", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Notebook", valor: 4200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1500 },
    { vendedor: "Joao", produto: "Notebook", valor: 3800 },
    { vendedor: "Carlos", produto: "Mouse", valor: 600 }
]

function buscarPrimeiraVendaAlta(lista, valorMinimo) {

    return lista.findIndex(item => item.valor>=valorMinimo)
    
}


console.log(buscarPrimeiraVendaAlta(vendas, 3000))
// 0

console.log(buscarPrimeiraVendaAlta(vendas, 4000))
// 4

console.log(buscarPrimeiraVendaAlta(vendas, 5000))
// -1