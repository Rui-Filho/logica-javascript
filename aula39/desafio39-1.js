/* Aula 39 - Nível 1  */

//  Combinando métodos: includes(); findIndex(); Lógica de busca

const vendedores = ["Ana", "Carlos", "Joao", "Marina", "Pedro"]

function buscarVendedor(lista,nome){

    return lista.findIndex(item => item===nome)

}

console.log(buscarVendedor(vendedores, "Ana"))
// 0

console.log(buscarVendedor(vendedores, "Marina"))
// 3

console.log(buscarVendedor(vendedores, "Rui"))
// -1

