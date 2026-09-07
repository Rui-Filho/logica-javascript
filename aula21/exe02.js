function media(...numeros){
    /* 1=teste de erro para não quebrar o código, caso a função for chamada sem ter valor algum nos argumentos*/
    if(numeros.length===0){
        return 0
    }

    return numeros.reduce((ac,n) => ac+n,0)/numeros.length
}

console.log(media(14,50,44,62,33,5,44,7))

console.log(media(2,1,4,5,2,8))

console.log(media(7,8,9))


/*1 = teste de erro */ 

console.log(media())