
/* Desafio 3 */

function atualizarQtd(lista,identificador){

    return lista.map(item => {
        if(item.id==identificador) {
            return {
                ...item,
                qtd:item.qtd+1
            }
        } else {
            return item
        }

    })



}
const carrinho = [
    {id: 1, nome: "Teclado", qtd: 1},
    {id: 2, nome: "Mouse", qtd: 2}
]

const resultado = atualizarQtd(carrinho,2)

console.log(resultado)