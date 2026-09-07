/* Desafio aula 27 - nível 04 - Funções parametrizadas dentro do pipeline.
   Pipeline configurável com parâmetros dinâmicos.
   Funções podem ser configuradas antes de entrar no pipeline.

*/

const config = {
    desconto:10,
    precoMin:10000,
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
        funcoes.push(desconto(config.desconto))
    }
    if(config.precoMin){
        funcoes.push(filtrarPorPreco(config.precoMin))
    }

    if(config.mostrarPreco){
        funcoes.push(mostrarPreco)
    }

    const processar = compor(...funcoes)

    return processar(lista)

}




function desconto(porcentagem){
  return function(lista){
    return lista.map(item => {
        return{
            ...item,
            preco:item.preco-(item.preco*porcentagem/100)
        }
    })
}
}

function filtrarPorPreco(min){
  return function(lista){
    return lista.filter(item => item.preco>min)
}}


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