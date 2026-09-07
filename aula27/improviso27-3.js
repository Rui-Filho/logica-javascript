/* Improviso nível 3 - Aula 27  */

const config = {
    desconto:true,
    filtrar:true,
    mostrarPreco:true
}

function compor(...funcoes){
    return function(listaInicial){
        return funcoes.reduce((lista,funcao) => {
            return funcao(lista)
        }, listaInicial)
    }
}

function processarConfig(lista,config){
    let funcoes = []
    if(config.desconto){
        funcoes.push(desconto)
    }
    if(config.filtrar){
        funcoes.push(filtrar)
    }

    if(config.mostrarPreco){
        funcoes.push(mostrarPreco)
    }

    const processar = compor(...funcoes)

    return processar(lista)

}

function desconto(lista){
    return lista.map(item => {
        return{
            ...item,
            preco:item.preco+(item.preco*18/100)
        }
    })

}

function filtrar(lista){
    return lista.filter(item => item.preco>10000)

}

function mostrarPreco(lista){
    return lista.map((item => item.preco))
}


const equipamentos = [
    {produto:"Centrífuga", preco:15000},
    {produto:"Cromatógrafo", preco:25000},
    {produto:"Pipeta", preco:2500},
    {produto:"Balança analítica", preco:8700},
    {produto:"Becker 500ml", preco:1200},
    {produto:"micropipeta", preco:3900},
    {produto:"Estufa bacteriológica", preco:12800}
]


const resultado = processarConfig(equipamentos,config)

console.log(resultado)