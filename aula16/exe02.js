function mediaArray(n){


    let soma = 0
    n.forEach(ni => {
        soma += ni        
    })

    return soma/n.length


}

const valores = [8,5,9,7,8,9]
console.log(mediaArray(valores))