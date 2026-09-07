const notas = [7,8.5,6]
let soma = 0
for(const nota of notas){
    soma += nota
}
const media = soma/notas.length
console.log(`A média das notas é de: ${media}. `)