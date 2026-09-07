

/* TREINANDO PARA CRIAR UM MAP UTILIZANDO REDUCE  */


function aoQuadrado(lista,regra){
    return lista.reduce((ac,n) => {
        ac.push(regra(n))
        return ac
    }, [] )
}


const numerosaoQuadrado = [2,8,9,10]

const resultado = aoQuadrado(numerosaoQuadrado,n => n*n)

console.log(resultado)