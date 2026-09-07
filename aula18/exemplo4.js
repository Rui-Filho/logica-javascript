/*  Usando map com objetos  */

const alunos = [
    {nome: "Rui", nota: 8},
    {nome: "Ana", nota: 6},
    {nome:"Carlos", nota:7},
    {nome: "Marina", nota:5}
]

const nomes = alunos.map(aluno => aluno.nome)

console.log(nomes)