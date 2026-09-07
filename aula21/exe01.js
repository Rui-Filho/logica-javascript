 /* Exercícios 1 */
const usuario = {
    id: 10,
    nome: "Ana",
    email: "ana@email.com",
    senha: "123456"
}

const {senha, ...dadosPublicos} = usuario
console.log(senha)
console.log(dadosPublicos)

/* Exercício 2  */


const usuarioSeguro= {
    ...dadosPublicos,
    ativo:true
}

console.log(usuarioSeguro)

