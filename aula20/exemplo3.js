/* Alterando propriedades sem alterar o original  - IMUTABILIDADE*/

const usuario = {
    nome: "Ana",
    idade: 25
}

const usuarioNovo = {
    ...usuario,
    idade: 27
}

console.log(usuario)
console.log(usuarioNovo)