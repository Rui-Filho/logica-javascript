/* Desafio 24 Nível 2 - CRIANDO FILTER UTILIZANDO REDUCE  */

/* INSIGHT para aprender que map e filter são variações do reduce*/


function meuFilter(lista,condicao){
    return lista.reduce((ac,item)=> {
        if(condicao(item))

            {            
           ac.push(item)
            }

            return ac
        
        

    },[])
}


const numeros = [1,2,3,4,5,6,7,8,99,88,5,4,8,7,6,33,55,55,8884,5]

const resultado = meuFilter(numeros,n=>n%2===0)

console.log(resultado)