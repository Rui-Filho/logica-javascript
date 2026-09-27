/* Desafio 38 - Nível 1   */

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 3500 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Monitor", valor: 1200 },
    { vendedor: "Marina", produto: "Mouse", valor: 450 },
    { vendedor: "Pedro", produto: "Notebook", valor: 3200 }
]


console.log(buscarIndiceVendedor(vendas,"Joao"))

console.log(buscarIndiceVendedor(vendas,"Pedro"))

console.log(buscarIndiceVendedor(vendas,"Marina"))

console.log(buscarIndiceVendedor(vendas,"Lucas"))



function buscarIndiceVendedor(lista,nome){

    return lista.findIndex(item => item.vendedor===nome)

}