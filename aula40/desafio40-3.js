/* Desafio 40-3  */

const produtos = [
    "Notebook",
    "Mouse",
    "Teclado",
    "Monitor",
    "Mouse",
    "Celular",
    "Mouse"
]

function encontrarIndices(lista,produto){

    let resultado = []

    let indice =lista.indexOf(produto)

    let inicio = lista.indexOf(produto,indice+1)

    while(indice!==-1){

        resultado.push(indice)

        indice = inicio

        inicio = lista.indexOf(produto,indice+1)


    }

    return resultado

}

console.log(encontrarIndices(produtos,"Mouse"))

console.log(encontrarIndices(produtos,"Notebook"))

console.log(encontrarIndices(produtos,"Tablet"))