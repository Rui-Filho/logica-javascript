/* Aula 38 - findIndex()   */

const vendas = [
    { vendedor: "Ana", valor: 3500 },
    { vendedor: "Carlos", valor: 800 },
    { vendedor: "Joao", valor: 3000 },
    { vendedor: "Marina", valor: 450 }
]

const resultado = vendas.find(item => item.vendedor === "Marina")
// Retorna o item 

const resultado1 = vendas.findIndex(item => item.vendedor === "Marina")
// Retorna a posição de índice 

console.log(resultado) 

console.log(resultado1)


