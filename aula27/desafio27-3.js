/* Desafio nível 02 - Aula 27    */

/* O maior e mais complexo código em exercício */

    const config = {
    aplicarImposto:true,
    filtrarCaros: true,
    extrairPrecos: true
    }

function compor(...funcoes){
    return function(valorInicial){
        return funcoes.reduce((valor, funcao) => {
            return funcao(valor)
        }, valorInicial)
    }
}

function processarComConfig(lista,config){
    const funcoes = []

    if(config.aplicarImposto){
        funcoes.push(aplicarImposto)
    }
    if(config.filtrarCaros){
        funcoes.push(filtrarCaros)
    }
    if(config.extrairPrecos){
        funcoes.push(extrairPrecos)
    }

    const processar = compor (...funcoes)        


    return processar(lista)
}



function aplicarImposto (lista){
    return lista.map(item => {
        return {
            ...item,            
            preco: item.preco+(item.preco*10/100)         
        }
    })    
}

function filtrarCaros(lista){
    return lista.filter(item => item.preco>1000)

}

function extrairPrecos(lista){
    return lista.map(item => item.preco)
}



const produtos = [
    { nome: "Notebook", preco: 4500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 1200 },
    { nome: "Teclado", preco: 200 }
]

const resultado = processarComConfig(produtos,config)

console.log(resultado)