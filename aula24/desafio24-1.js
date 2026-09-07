/* DESAFIO 24 (NÍVEL1) CRIAR MAP USANDO REDUCE:

*/

function meuMap(lista,transformacao){
    return lista.reduce((ac,item)=> {                     
        ac.push(transformacao(item))
        return ac        
    },  [] )}

const numeros = [1,2,3,4]

const resultado = meuMap(numeros, n => n*2)

console.log(resultado)

