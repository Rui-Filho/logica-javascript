const vendas = [
    {produto: "Notebook", preco: 4500, quantidade: 1},
    {produto: "Mouse", preco: 80, quantidade:3},
    {produto: "Teclado", preco:200, quantidade: 2},
    {produto: "Monitor", preco: 1200, quantidade: 1},
    {produto: "Cabo HDMI", preco:50, quantidade: 4}
]

const valorMaior = vendas.filter( cp => cp.preco*cp.quantidade>500)

console.log(valorMaior)

/*Usando desestruturação no map abaixo; Com a versão mais enxuta*/

const melhoresVendas = valorMaior.map(({produto,preco,quantidade}) => ({
    
    
    produto,
    total: preco*quantidade,
    categoria: preco.quantidade>=2000? "Venda Alta" : "Venda média"
    
}))




console.log(melhoresVendas)

const totalVendas = valorMaior.reduce( (ac,cp) => ac+cp.preco*cp.quantidade,0)

console.log(totalVendas)





