/*desafio 12*/
const precos = [79,85.90,74,90,52.5]
let soma = 0
precos.forEach(preco=>{
    soma += preco
})
console.log(`A soma dos preços é de R$ ${soma}`)