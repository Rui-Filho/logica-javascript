/* Rest em desestruturação de objeto  */

const pessoa = {
    nome: "Rui",
    idade: 41,
    cidade: "São Paulo",
    profissao: "Dev"

}

const {nome, ...resto} = pessoa
console.log(nome)
console.log(resto)