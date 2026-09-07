/* DESAFIO 3 - AULA 25*/

/* ESTUDAR MUIIIIITO ESTE EXERCICIO  */

function adicionarCampo(lista,campo,funcao){
    return lista.map(item => ({
        ...item,
        [campo]:funcao(item)
    }))

}

function filtrarPor(lista,criterio){
    return lista.filter(item => criterio(item))
}

function resumirPorCategoria(lista, propriedade){
    return lista.reduce((ac,item) => {
        const categoria = item[propriedade]
        if(!ac[categoria]){
            ac[categoria]= {
                total:0,
                quantidade:0
            }
        }
        ac[categoria].total += item.total
        ac[categoria].quantidade++
        return ac

    }, {})

}

/*   AQUI ESTÁ O INSIGHT DO EXERCÍCIO*/

function processarVendas(lista){

    return resumirPorCategoria(
                filtrarPor(
                    adicionarCampo(lista,"total", item => item.preco*item.quantidade),
                item => item.total>1000),
            "categoria")

}



const vendas = [
    { produto: "Notebook", categoria: "Eletrônicos", preco: 4500, quantidade: 1 },
    { produto: "Mouse", categoria: "Eletrônicos", preco: 80, quantidade: 3 },
    { produto: "Monitor", categoria: "Eletrônicos", preco: 1200, quantidade: 2 },
    { produto: "Teclado", categoria: "Eletrônicos", preco: 200, quantidade: 4 },
    { produto: "Cadeira", categoria: "Móveis", preco: 900, quantidade: 2 },
    { produto: "Mesa", categoria: "Móveis", preco: 1500, quantidade: 1 }
]


const resultado = processarVendas(vendas)

console.log(resultado)

