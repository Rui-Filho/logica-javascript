/* Aula 39 - Nível 3  */

const vendedores = ["Ana", "Carlos", "Joao", "Marina", "Pedro"]

const vendedoresComVenda = ["Carlos", "Marina", "Pedro"]



function analisarVendedor(lista,vendedoresComVenda,nome){

    const existe = lista.includes(nome)
    const temVenda = vendedoresComVenda.includes(nome)
    const indice = lista.findIndex(item => item===nome)

    const resultado = {
        nome,
        existe,
        temVenda,
        indice
    }

    return resultado

}


console.log(analisarVendedor(vendedores,vendedoresComVenda,"Marina"))

console.log(analisarVendedor(vendedores,vendedoresComVenda,"Ana"))

console.log(analisarVendedor(vendedores,vendedoresComVenda,"Rui"))