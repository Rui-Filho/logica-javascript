/* Spread em objetos */

const pessoa = {
    nome: "Rui",
    idade: 41
}

const novaPessoa = {
    ...pessoa,
    cidade: "São Leopoldo"
}

console.log(novaPessoa)