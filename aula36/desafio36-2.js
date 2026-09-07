/* Desafio 36 - Nível 2  */

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", produto: "Mesa", valor: 1500 }
]

function vendedorTemVendaAlta(lista, nome, valorMinimo) {

    return lista.some( item => 
        item.vendedor===nome&&item.valor>=valorMinimo
    )

}

console.log(vendedorTemVendaAlta(vendas, "Carlos", 800))

console.log(vendedorTemVendaAlta(vendas, "Ana", 4000))

console.log(vendedorTemVendaAlta(vendas,"Ana", 8000))

