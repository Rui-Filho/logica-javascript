
const vendas = [ 
    { vendedor: "Ana", produto: "Notebook", valor: 3500 }, 
    { vendedor: "Ana", produto: "Mouse", valor: 500 }, 
    { vendedor: "Carlos", produto: "Teclado", valor: 800 }, 
    { vendedor: "Carlos", produto: "Monitor", valor: 1200 },
     { vendedor: "Joao", produto: "Notebook", valor: 3000 }, 
     { vendedor: "Joao", produto: "Mouse", valor: 700 } 
    ]



function vendedoresComTodasVendasAcima(lista, valorMinimo) {

    const resultado = []
    const vendedores = []


    // 1. Descobrir os vendedores sem repetir
    lista.forEach(item => {
        if (!vendedores.includes(item.vendedor)) {
            vendedores.push(item.vendedor)
        }
    })



    // 2. Verificar cada vendedor
    vendedores.forEach(vendedor => {

        const vendasDoVendedor = lista.filter(item => {
            return item.vendedor === vendedor
        })



        // 3. Todas as vendas desse vendedor atingem o mínimo?
        if (vendasDoVendedor.every(item => item.valor >= valorMinimo)) {
            resultado.push(vendedor)
        }
    })

    return resultado
}

console.log(vendedoresComTodasVendasAcima(vendas, 700))