/* Desafio 35 - Aula 1  */

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 }
]

const resultado = buscarVendedor(vendas, "Carlos")

console.log(resultado)

function buscarVendedor(lista,nome){
    return lista.find(item => item.vendedor===nome)
}