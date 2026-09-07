/*Usando filter com objetos*/

const alunos = [
    {nome: "Rui", nota: 8},
    {nome: "Ana", nota: 6},
    {nome:"Carlos", nota:7},
    {nome: "Marina", nota:5}
]

const aprovados = alunos.filter(aluno => aluno.nota>=7)

console.log(aprovados)