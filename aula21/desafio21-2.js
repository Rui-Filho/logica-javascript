/* Desafio 21 corrigido, para conferência e estudo  */

function relatorioVendas(...produtos){

    const produtosTransformados = produtos.map(item => {

        const total = item.preco * item.quantidade

        return {
           ...item,
            total,
            categoria: total >= 2000 ? "Venda Alta" : "Venda Normal"
        }
    })

    const faturamentoTotal = produtosTransformados.reduce(
        (ac, item) => ac + item.total,
        0
    )

    return {
        produtosTransformados,
        faturamentoTotal
    }
        
}



const resultado = relatorioVendas(
   {nome: "Notebook", preco:4500, quantidade: 2},
   {nome: "Celular", preco: 800, quantidade:6},
   {nome: "Ps5", preco: 5000, quantidade:1},
   {nome: "Mouse", preco: 80, quantidade:4}
)

console.log(resultado)