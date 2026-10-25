/*  improviso 40-4*/

const vendas = [
    { vendedor: "Mariana", valor: 250 },
    { vendedor: "Felipe", valor: 400 },
    { vendedor: "Mariana", valor: 180 },
    { vendedor: "Bruno", valor: 350 },
    { vendedor: "Camila", valor: 120 },
    { vendedor: "Felipe", valor: 600 },
    { vendedor: "Bruno", valor: 220 },
    { vendedor: "Mariana", valor: 300 }
]


function encontrarIndicesDeVendas(lista,vendedor,valorMinimo){

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

console.log(encontrarIndicesDeVendas(vendas,"Mariana",150))

console.log(encontrarIndicesDeVendas(vendas,"Felipe",500))

console.log(encontrarIndicesDeVendas(vendas,"Bruno",300))