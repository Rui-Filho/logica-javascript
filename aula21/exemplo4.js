function soma(...numeros){
    return numeros.reduce((ac, n) => ac+n,0)
}

console.log(soma(10,50,40,90))

console.log(soma(1,5,4,1,1,2,4))

console.log(soma(5,90,8887,45,6665,444))

console.log(soma(0,1,8.7,3,9,8,10))