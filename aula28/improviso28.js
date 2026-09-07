/* IMPROVISO DO NÍVEL 1 DA AULA 28    */




function totalPorVendedor(lista){


  return Object.values(  
    lista.reduce((ac,item) => {
        const vendedor = item.vendedor
        if(!ac[vendedor]){
            ac[vendedor]= {
                vendedor,
                totalDeVendas:0
            }}

            ac[vendedor].totalDeVendas += item.venda
            return ac

    },{}))
    .sort((a,b)=> b.totalDeVendas-a.totalDeVendas)
    .slice(0,3)

}


const vendas = [
    {vendedor: "João", venda:5400},
    {vendedor:"Paula", venda:8400},
    {vendedor:"Felipe", venda:3400},
    {vendedor:"Daniele", venda:3400},
    {vendedor:"Antonio", venda:8700},
    {vendedor:"Luciana", venda:7400},
    {vendedor:"Daniele", venda:4100},
    {vendedor:"Felipe", venda:2400},
    {vendedor:"Daniele", venda:7230},
    {vendedor:"João", venda:3245},
    {vendedor:"Paula", venda:7410},
    {vendedor:"Felipe", venda:2658},
    {vendedor:"Marcia", venda:2500},
    {vendedor:"Paula", venda:3600}
]

const resultado = totalPorVendedor(vendas)

console.log(resultado)