
/* Função agrupando e resumindo por categoria - AULA 25 NÍVEL2  */

function agruparPor(lista, propriedade){
    return lista.reduce((ac,item)=> {
        const tipoCategoria = item[propriedade]
        if(!ac[tipoCategoria]){
            ac[tipoCategoria]={
                total: 0,
                quantidade:0
            }
        }
        const total = item.preco*item.quantidade
        ac[tipoCategoria].total += total
        ac[tipoCategoria].quantidade ++
        return ac
    }, {})

}

const vendas = [
    { produto: "Notebook", categoria: "Eletrônicos", preco: 4500, quantidade: 1 },
    { produto: "Mouse", categoria: "Eletrônicos", preco: 80, quantidade: 3 },
    { produto: "Monitor", categoria: "Eletrônicos", preco: 1200, quantidade: 2 },
    { produto: "Teclado", categoria: "Eletrônicos", preco: 200, quantidade: 4 },
    { produto: "Cadeira", categoria: "Móveis", preco: 900, quantidade: 2 },
    { produto: "Mesa", categoria: "Móveis", preco: 1500, quantidade: 1 }
]

const resultado = agruparPor(vendas,"categoria")

console.log(resultado)