/* TREINANDO: CRIAR UM MAP USANDO REDUCE  */

function triplicar(lista,calculo){
    return lista.reduce((ac,item)=> {
        ac.push(calculo(item))
        return ac
    }, [])

}


const numeros = [1,8,9,2,5,4,6]

const resultado = triplicar(numeros, item => item*3)

console.log(resultado)