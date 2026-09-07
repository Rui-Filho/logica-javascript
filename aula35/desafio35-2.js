


/* Aula 35 - Nível 2  */

const vendas = [
    { vendedor: "Ana", valor: 4500 },
    { vendedor: "Joao", valor: 200 },
    { vendedor: "Ana", valor: 1200 },
    { vendedor: "Carlos", valor: 800 },
    { vendedor: "Joao", valor: 900 },
    { vendedor: "Ana", valor: 1500 }
]

const resultado = buscarResumoVendedor(vendas,"Ana")        

console.log(resultado)

function buscarResumoVendedor(lista,nome){

    const vendasVendedor = lista.filter(item => item.vendedor===nome)

    const resumo = vendasVendedor.reduce((ac,item)=> {

        ac.quantidade++
        ac.total += item.valor

        return ac

    },{
        vendedor:nome,
        quantidade:0,
        total: 0,


    })


    return resumo

}


