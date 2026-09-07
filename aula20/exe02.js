/* Exercício 2  */

const produto = {
    nome: "Notebook",
    preco: 4500,
    estoque: 10
}

const novoProduto = {
    ...produto,
    estoque:8,
    disponivel: true
}

console.log(novoProduto)