const precos = [10,20,30,40]
let soma = 0
for(let i = 0; i < precos.length; i++){
    soma+=precos[i]
}

console.log(`O valor total dos produtos é de R$ ${soma} reais`)