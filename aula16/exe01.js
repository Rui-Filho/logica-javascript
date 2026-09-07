function contarPares(numeros){
    let npar = 0

    numeros.forEach(numero => {
        if(numero%2===0){
            npar++
        }
        
    })

    return npar

}


const valores = [2,5,8,4,7,9,6,3,5,9,12,58,74,77,98,24,36]
console.log(contarPares(valores))