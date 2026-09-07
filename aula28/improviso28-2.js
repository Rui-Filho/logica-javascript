/* IMPROVISO AULA 28 NIVEL 2  */

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


const resultado = gerarRelatorio(vendas)

console.log(resultado)


function gerarRelatorio(lista){
    const resultado =  lista.reduce((ac,item)=> {
        const vendedor = item.vendedor
        if(!ac.vendedores[vendedor]){
            ac.vendedores[vendedor]={
                vendedor,
                total:0
            }
        }
        ac.vendedores[vendedor].total += item.venda
        ac.totalGeral += item.venda
        return ac

    },{
        totalGeral:0,
        vendedores: {}
    }) 

    resultado.vendedores =Object.values(resultado.vendedores)

    .sort((a,b)=> b.total-a.total)

    const melhorVendedor = resultado.vendedores[0]

    resultado.melhorVendedor = melhorVendedor

    return resultado
}


