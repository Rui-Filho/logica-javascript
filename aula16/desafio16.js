function verificarAprovados(notas){
    let contador = 0
    notas.forEach(nota => {
        if(nota >= 7){
            contador++
        }
    })

    return contador

}

const notasAlunos = [9,7,5,8,6,8,3]
console.log(verificarAprovados(notasAlunos))