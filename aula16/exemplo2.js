function somarArray(numeros){
    let soma = 0
    numeros.forEach(numero => {
        soma += numero        
    })

    return soma
}

const valores = [10,20,30,155, 800]
console.log(somarArray(valores))