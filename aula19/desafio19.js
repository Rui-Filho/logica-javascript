const funcionarios = [
    { nome: "Rui", salario: 5000, setor: "TI" },
    { nome: "Ana", salario: 3000, setor: "RH" },
    { nome: "Carlos", salario: 7000, setor: "TI" },
    { nome: "Marina", salario: 2500 }
]

/* Desetruturação usando map; renomeando propriedade dentro do map; tornando valor padrão para propriedade, caso não tenha no array original  */

const renda = funcionarios.map(({nome: colaborador, salario,setor="Não informado" }) => ({    
        colaborador,
        salario,
        setor,
        categoria: salario>=6000? "Alta renda" : "Renda comum"    
}))

console.log(renda)