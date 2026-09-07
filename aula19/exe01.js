const alunos = [
    {nome: "Ana", nota:8},
    {nome:"Carlos", nota:5},
    {nome:"Marina", nota:9}
]

const status = alunos.map(({nome,nota}) => ({
    
        nome,
        status: nota>=7? "Aprovado" : "Reprovado"    
}))

console.log(status)


