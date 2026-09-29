/* Aula 38 - Nível 2    */

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 3500 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Ana", produto: "Mouse", valor: 500 },
    { vendedor: "Joao", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Notebook", valor: 4200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1500 }
]


function encontrarVenda(lista,vendedor,valorMinimo){

    return lista.findIndex(item => item.vendedor===vendedor&&item.valor>=valorMinimo)

}


console.log(encontrarVenda(vendas,"Ana",1000))

console.log(encontrarVenda(vendas, "Carlos", 4000))

console.log(encontrarVenda(vendas, "Joao", 2000))





