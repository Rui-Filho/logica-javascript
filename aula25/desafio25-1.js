/* Desafio Relatório de vendas () */


const vendas = [
    { produto: "Notebook", categoria: "Eletrônicos", preco: 4500, quantidade: 1 },
    { produto: "Mouse", categoria: "Eletrônicos", preco: 80, quantidade: 3 },
    { produto: "Monitor", categoria: "Eletrônicos", preco: 1200, quantidade: 2 },
    { produto: "Teclado", categoria: "Eletrônicos", preco: 200, quantidade: 4 },
    { produto: "Cadeira", categoria: "Móveis", preco: 900, quantidade: 2 },
    { produto: "Mesa", categoria: "Móveis", preco: 1500, quantidade: 1 }
]


const resultado = vendas
.map(item => ({
    ...item,
    total:item.preco*item.quantidade
    
}))
.filter(item => item.total>=1000)
.reduce((ac,item)=>{
    ac.totalGeral += item.total
    ac.quantidadeVendas ++
    return ac
}, {
    totalGeral:0,
    quantidadeVendas:0
})

console.log(resultado)

