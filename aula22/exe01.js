const vendas = [
    {produto: "Notebook", preco:4500, quantidade: 1},
    {produto: "Mouse", preco: 80, quantidade:3},
    {produto: "Monitor", preco:1200, quantidade:2},
    {produto:"Teclado", preco:200, quantidade:4}
]


const resultados = vendas
.map(produto => produto.preco*produto.quantidade)

.filter(produto => produto>=1000)

.reduce((ac, n)=> ac+n,0)

console.log(resultados)
