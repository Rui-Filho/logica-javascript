/* Rest em parâmetros de função   */

function soma(...numeros) {
    return numeros.reduce((ac,n)=> ac+n,0)
}

console.log(soma(10,5,7,8,9,55,48,26,225,94))