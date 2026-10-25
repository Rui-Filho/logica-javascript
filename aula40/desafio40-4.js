/* 40-4 */

const vendas = [
    { vendedor: "Ana", valor: 150 },
    { vendedor: "Carlos", valor: 300 },
    { vendedor: "Ana", valor: 450 },
    { vendedor: "Pedro", valor: 200 },
    { vendedor: "Ana", valor: 100 },
    { vendedor: "Carlos", valor: 500 }
]


function encontrarIndicesVendas(lista,vendedor,valorMinimo){

    let resultado = []

    let indice = 0    

    while(indice<lista.length){

        if(lista[indice].vendedor===vendedor&&lista[indice].valor>=valorMinimo){
            resultado.push(indice)
        }
        
        indice++
        
    }

    return resultado

}



console.log(encontrarIndicesVendas(vendas, "Ana", 150))
// [0, 2]

console.log(encontrarIndicesVendas(vendas, "Carlos", 400))
// [5]

console.log(encontrarIndicesVendas(vendas, "Pedro", 300))
// []