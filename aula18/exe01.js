/* Exercício 1,2 e 3*/

const pessoas = [
    {nome: "Rui", idade: 17},
    {nome: "Ana", idade: 25},
    {nome: "Carlos", idade: 15},
    {nome: "Marina", idade: 32}
]

const maioresdeIdade = pessoas.filter(pessoa => pessoa.idade>=18)
console.log(maioresdeIdade)

const nomes = pessoas.map(pessoa => pessoa.nome)
console.log(nomes)

const media  = pessoas.reduce((ac,i)=> ac + i.idade,0)/pessoas.length
console.log(media)

