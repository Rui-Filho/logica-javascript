
/*desafio: código criado por mim*/

const notas = [7,6,5,8,5,9,8,8,7,5,3,4,10]

const aprovados = notas.filter(n => n>=7)

const media = aprovados.reduce((ac,cn)=> ac+cn,0)/aprovados.length


console.log(notas)
console.log(aprovados)
console.log(media)