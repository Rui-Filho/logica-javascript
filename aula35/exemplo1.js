
/* FIND - Encontrar um elemento dentro de um array.  */




const vendas = [
    { vendedor: "Ana", valor: 4500 },
    { vendedor: "Joao", valor: 200 },
    { vendedor: "Carlos", valor: 800 }
]

const resultado = vendas.find(item => item.vendedor === "Joao")

console.log(resultado)