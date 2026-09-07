


/* IMPROVISO DO EXERCÍCIO NIVEL 1 DA AULA 27*/

function listaFuncoes(...funcoes){
    return function(valorInicial){
        return funcoes.reduce((valor,funcao)=> {
            return funcao(valor)
        }, valorInicial
    )
    }
}



const processamento = listaFuncoes(
    n => n*2,
    n => n+50,
    n => n/2,
    n => n*100
)

const resultado1 = processamento(78)

const resultado2 = processamento(104)

console.log(resultado1)

console.log(resultado2)