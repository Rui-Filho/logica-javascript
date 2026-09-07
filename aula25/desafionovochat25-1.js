

/*  DESAFIO 1 (NOVO CHAT)*/

function aumentarValor(lista,porcentagem){

    return lista.map(item => ({
        ...item,
        preco:item.preco+(item.preco*porcentagem/100)

    }))

}

const produtos = [
    {nome:"notebook", preco:3000},
    {nome:"Mouse", preco:50}
]

const resultado = aumentarValor(produtos,37)

console.log(resultado)