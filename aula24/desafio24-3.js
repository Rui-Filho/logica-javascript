/* Desafio Pipeline aula 24 Nível 3 */

/* REVISAR MUITO ESTE EXERCICIO, POIS NÃO HAVIA CONSEGUIDO MONTAR ELE SOZINHO*/


function pipeline(valorInicial,...funcoes){
    
    return funcoes.reduce((valorInicial,funcao)=> {

        return funcao(valorInicial)     
               
    }, 
    valorInicial  
    )

}

const resultado = pipeline(
    50,
    n => n * 2,
    n => n + 1,
    n => n * 3
)

console.log(resultado)