function calcularDesconto(preco , desconto){
    return preco - (preco * desconto / 100)
}

function mensagemFinal(preco){
    return `O valor final do produto é R$ ${preco}`
}

const precoFinal = calcularDesconto(740,7)
const msg = mensagemFinal(precoFinal)

console.log(msg)