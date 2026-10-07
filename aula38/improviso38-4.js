/*  Aula 38 - Nível 4 - Improviso*/

const vendas = [

    { vendedor: "Marina", produto: "Celular", valor: 2800 },

    { vendedor: "Pedro", produto: "Fone", valor: 450 },

    { vendedor: "Marina", produto: "Tablet", valor: 1900 },

    { vendedor: "Lucas", produto: "Teclado", valor: 750 },

    { vendedor: "Pedro", produto: "Celular", valor: 3200 },

    { vendedor: "Marina", produto: "Monitor", valor: 1700 },

    { vendedor: "Lucas", produto: "Notebook", valor: 4100 },

    { vendedor: "Pedro", produto: "Mouse", valor: 350 }

]



function vendaDeValor(lista,vendedor,valorMinimo){

    const indice = lista.findIndex(item => item.vendedor===vendedor&&item.valor>=valorMinimo)

    const resultado = {
        vendedor,
        indice,
    }

    if(indice === -1){
        resultado.valor = null
    } else {
        resultado.valor = lista[indice].valor
    }

    return resultado

}

console.log(vendaDeValor(vendas,"Marina",2000))

console.log(vendaDeValor(vendas,"Pedro",3000))

console.log(vendaDeValor(vendas,"Lucas", 5000))

