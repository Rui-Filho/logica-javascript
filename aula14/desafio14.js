/*Desafio 14*/

function calcularMedia(a,b,c){
    return (a+b+c)/3
}
const res = calcularMedia(9,7,5)
console.log(`A média de suas notas é ${res}`)
if(res>=7){
    console.log("Você está aprovado(a)")
} else {
    console.log("Você está reprovado")
}