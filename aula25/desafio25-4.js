/* Desafio Aula 25 - Nível 4  */


function pipeline(lista,...funcoes){
    return funcoes.reduce((lista,funcao)=> {
        return funcao(lista)

    }, lista) 
}

const adicionarTotal = lista => lista.map(item => ({
    ...item,
    total:item.preco*item.quantidade

}))

const filtrarAltos = lista => lista.filter(item => item.total>1000)

const resumirCategoria = lista => lista.reduce((ac,item)=> {
    const categoria = item.categoria
    if(!ac[categoria]){
        ac[categoria]= {
            total:0,
            quantidade:0
        }
    }
    ac[categoria].total += item.total
    ac[categoria].quantidade ++
    return ac

},{})




const vendas = [
    { produto: "Notebook", categoria: "Eletrônicos", preco: 4500, quantidade: 1 },
    { produto: "Mouse", categoria: "Eletrônicos", preco: 80, quantidade: 3 },
    { produto: "Monitor", categoria: "Eletrônicos", preco: 1200, quantidade: 2 },
    { produto: "Teclado", categoria: "Eletrônicos", preco: 200, quantidade: 4 },
    { produto: "Cadeira", categoria: "Móveis", preco: 900, quantidade: 2 },
    { produto: "Mesa", categoria: "Móveis", preco: 1500, quantidade: 1 }
]

const resultado = pipeline(
    vendas,
    adicionarTotal,
    filtrarAltos,
    resumirCategoria
)

console.log(resultado)