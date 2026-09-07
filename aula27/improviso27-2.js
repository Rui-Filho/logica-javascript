/* Improviso Aula 27 - Nível 2 */



function compor(...funcoes){
    return function(listaInicial){
        return funcoes.reduce((lista,funcao)=>{
            return funcao(lista)
        }, listaInicial)
    }
}


function somarImposto18(lista){
    return lista.map((item => {
        return {
            ...item,
            preco:item.preco+(item.preco*18/100)
        }
    }))
}

function maioresValores(lista){
    return lista.filter(item => item.preco>10000)
}

function extrairValores(lista){
    return lista.map(item => item.preco)
}


const equipamentos = [
    {produto:"Centrífuga", preco:15000},
    {produto:"Cromatógrafo", preco:25000},
    {produto:"Pipeta", preco:2500},
    {produto:"Balança analítica", preco:8700},
    {produto:"Becker 500ml", preco:1200}
]



const processar = compor(
    somarImposto18,
    maioresValores,
    extrairValores

)


const resultado = processar(equipamentos)

console.log(resultado)