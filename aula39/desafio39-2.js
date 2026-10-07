/* Aula 39 - Desafio 2 */

const vendedores = ["Ana", "Carlos", "Joao", "Marina", "Pedro"]


const vendedoresComVenda = ["Carlos", "Marina", "Pedro"]


function verificarVendedor(lista,vendedoresComVenda,nome){

    const existe = lista.includes(nome)

    const temVenda = vendedoresComVenda.includes(nome)


    const resultado = {
        nome,
        existe,
        temVenda,

    }

    return resultado

}


console.log(verificarVendedor(vendedores,vendedoresComVenda,"Marina"))

console.log(verificarVendedor(vendedores,vendedoresComVenda,"Ana"))

console.log(verificarVendedor(vendedores,vendedoresComVenda,"Rui"))