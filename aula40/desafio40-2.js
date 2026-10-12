/* Nível 2  */

const produtos = [
    "Notebook",
    "Mouse",
    "Teclado",
    "Monitor",
    "Mouse",
    "Celular",
    "Mouse"
]

function contarOcorrencias(lista,produto){

    let contador = 0

    let indice = lista.indexOf(produto)

    let inicio = lista.indexOf(produto,indice+1)

    while(indice!==-1){        

        contador++

        indice = inicio

        inicio = lista.indexOf(produto, indice + 1)     


    } 
    

    return contador



}

console.log(contarOcorrencias(produtos, "Mouse"))    // 3
console.log(contarOcorrencias(produtos, "Notebook")) // 1
console.log(contarOcorrencias(produtos, "Tablet"))   // 0