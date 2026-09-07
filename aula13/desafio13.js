function verIdade(idade) {
    if (idade >= 18){
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }

}

let res = verIdade(17)
console.log(res)

res = verIdade(45)
console.log(res)

res = verIdade(62)
console.log(res)

res = verIdade(5)
console.log(res)