/* Desafio da aula 28 - Nível 1
Ranking e agregação de dados  */


function totalPorVendedor(lista){

    return Object.values(
    lista.reduce((ac,item)=> {
        const vendedor = item.vendedor
        if(!ac[vendedor]){
            ac[vendedor]={
                vendedor,
                total:0
            }}

            ac[vendedor].total += item.valor
            return ac

        }, {} ))
        .sort((a,b)=>b.total-a.total )
        .slice(0,2)   
    

}




const vendas = [
    { vendedor: "Ana", valor: 4500 },
    { vendedor: "Joao", valor: 200 },
    { vendedor: "Ana", valor: 1200 },
    { vendedor: "Carlos", valor: 800 },
    { vendedor: "Joao", valor: 900 },
    { vendedor: "Ana", valor: 1500 },
    { vendedor: "Carlos", valor: 100 }
]

const resultado = totalPorVendedor(vendas)

console.log(resultado)