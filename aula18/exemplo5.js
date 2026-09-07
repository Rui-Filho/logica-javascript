/*Média das notas, agora com objetos*/

const alunos = [
    {nome: "Rui", nota: 8},
    {nome: "Ana", nota: 6},
    {nome:"Carlos", nota:7},
    {nome: "Marina", nota:5}
]

const media = alunos.reduce((ac, aluno)=> ac+aluno.nota,0)/alunos.length
console.log(media)


