/*  let n1 = 8
    let n2 = 6
    let n3 = 7

let media = (n1+n2+n3)/3
if(media>=7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}*/

function calcularMedia(a,b,c){
    return (a+b+c)/3
}

function verificarResultado(a){
    if(a>=7){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

const mediaFinal = calcularMedia(5,9,6)
const res = verificarResultado(mediaFinal)

console.log(`Média: ${mediaFinal} - ${res}` )
