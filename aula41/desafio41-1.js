/* desafio 40-1 */

const linguagens = [
    "JavaScript",
    "Python",
    "Java",
    "JavaScript",
    "C++",
    "Python",
    "JavaScript"
]

function buscarUltimaOcorrencia(lista,linguagem){

    return lista.lastIndexOf(linguagem)

}

console.log(buscarUltimaOcorrencia(linguagens, "JavaScript"))	
console.log(buscarUltimaOcorrencia(linguagens, "Python"))	
console.log(buscarUltimaOcorrencia(linguagens, "Java"))	
console.log(buscarUltimaOcorrencia(linguagens, "Ruby"))

