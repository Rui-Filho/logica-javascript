const nota = [7, 8.5, 6]
let soma = 0

for(let i = 0; i < nota.length; i++ ){
    soma += nota[i]
}

const media = soma/nota.length
console.log(`Média: ${media}`)