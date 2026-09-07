const numeros = [1,2,3,4,5]
const resultado = numeros
.map(n => n*2)
.filter(n => n>5)
.reduce((ac,n)=> ac+n,0)

console.log(resultado)


