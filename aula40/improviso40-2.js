/* Improviso 40-2  */

const clubes = [
    "Malta",
    "Gm",
    "Malta",
    "Bremer",
    "Bremer",
    "Industrial",
    "Bremer",
    "Malta",
]


function contar(lista,clube){

    let contador = 0

    let indice = lista.indexOf(clube)

    let inicio =  lista.indexOf(clube,indice+1)

    while(indice!==-1){
        contador++
        indice=inicio
        inicio = lista.indexOf(clube,indice+1)
    }

    return contador



}

console.log(contar(clubes,"Malta"))

console.log(contar(clubes,"Bremer"))

console.log(contar(clubes,"Industrial"))