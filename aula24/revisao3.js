/* TREINANDO PIPELINE DE TRANSFORMAÇÃO

* Agora o reduce irá percorrer um array de funções; o valor informado na chamada da função vai ser o valor que vai ficar no acumulador e sofrer a transformação de cada função percorrida no array: Utilizando também um rest para representar um conjunto de funções.  */

function calcular(valorInicial,...calculos){
    return calculos.reduce((ac,fn)=> fn(ac),valorInicial)

}


const pipeline = calcular(
    80,
    item => item*4,
    item => item+200,
    item=> item/3
)


console.log(pipeline)