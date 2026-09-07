

function somarArray(numeros){
    let soma = 0
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i]
    }

    return soma
}

const valores = [10,20,30]
console.log(somarArray(valores))