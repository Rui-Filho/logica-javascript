/* Desafio 27 - Nível 2    */

function compor(...funcoes){
    return function(listaInicial){
        return funcoes.reduce((lista,funcao)=> {
            return funcao(lista)
        }, listaInicial)

    }
}


function adicionarImposto (lista){
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


const processar = compor(
    adicionarImposto,
    filtrarCaros,
    extrairPrecos

)

const resultado = processar(produtos)

console.log(resultado)




