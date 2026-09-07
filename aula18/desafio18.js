

/*Desafio 18 , não consegui resolver sozinho. ESTUDAR MUITO ESTA MECÂNICA*/

/*TRANFORMANDO UM ARRAY DE OBJETOS COM MAP, USANDO CONDIÇÕES*/



const pessoas = [
    {nome: "Rui", idade: 41},
    {nome: "Ana", idade: 19},
    {nome: "Pablo", idade: 59},
    {nome: "Enzo", idade:5}
]



const status = pessoas.map(pessoa => ({
    
        nome: pessoa.nome,
        status: pessoa.idade>=18? "Adulto" : "Menor de idade"

    }))


console.log(status)


/* SE FOSSE COM IF E ELSE

const status = pessoas.map(pessoa => {
    let tipo

    if (pessoa.idade >= 18) {
        tipo = "Adulto"
    } else {
        tipo = "Menor de idade"
    }

    return {
        nome: pessoa.nome,
        status: tipo
    }
})

*/

