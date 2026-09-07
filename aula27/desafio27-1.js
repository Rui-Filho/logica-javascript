
/* Desafio nivel 1 Aula 27*/

/* ESTE FOI UM DOS EXERCÍCIOS QUE MAIS GASTOU CÉREBRO*/

/* REVISAR MUITO  */


function compor (...funcoes){

   return function(valorInicial){
   

    return funcoes.reduce((valorInicial,funcao)=> {
        return funcao(valorInicial)

    }, 
    valorInicial
    )

    

}

}

const processar = compor(    
    n => n*2,
    n => n+1,
    n => n*3

)

const resultado = processar(10)

console.log(resultado)