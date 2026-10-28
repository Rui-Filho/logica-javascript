/* Desafio 41-2  */

const vendas = [100, 250, 180, 400, 250, 300, 250]

function buscarUltimaVenda(lista,valor){
    return lista.lastIndexOf(valor)
}




console.log(buscarUltimaVenda(vendas, 250))



console.log(buscarUltimaVenda(vendas, 400))



console.log(buscarUltimaVenda(vendas, 999))