/* Desafio 40-1 */

const produtos = [
    "Notebook",
    "Mouse",
    "Teclado",
    "Monitor",
    "Mouse",
    "Celular"
]


function buscarProduto(lista,produto){

    return lista.indexOf(produto)

}

console.log(buscarProduto(produtos, "Teclado")) // 2

console.log(buscarProduto(produtos, "Mouse"))   // 1

console.log(buscarProduto(produtos, "Tablet"))  // -1

