/* Exercício para verificar números primos, usando loops aninhados*/


let n = 30
for(let i = 2;i<=n;i++){

    let numeroPrimo = true

    for(let c = 2;c < i;c++){
        if(i % c === 0){
            numeroPrimo = false
            break
            
        }
        
    }

    if(numeroPrimo){
        console.log(i)

    }


}
