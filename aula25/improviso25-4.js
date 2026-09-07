/* Improviso do desafio 4  */

/* Pipeline genérico de processamento  */

function pipeline(lista,...funcoes){
    return funcoes.reduce((lista,funcao)=> {
        return funcao(lista)
    }, lista)

}

const adicionarCampo = lista => lista.map(item => ({
    ...item,
    total: item.valor*item.quantidade                

}))

const filtrarAltos = lista => lista.filter(item => item.total>3000)

const agruparPor = lista => lista.reduce((ac,item)=> {
    const tipoProduto = item.tipo
    if(!ac[tipoProduto]){
        ac[tipoProduto]= {
            total:0,
            quantidade:0
        }
    }

    ac[tipoProduto].total += item.total
    ac[tipoProduto].quantidade ++
    return ac
},{})

const vendasLab = [
    {produto:"Estufa",tipo:"equipamentos", valor:4900, quantidade:4},
    {produto:"Cromatógrafo",tipo:"equipamentos", valor: 20000, quantidade:1},
    {produto:"Becker 500ml", tipo:"vidraria", valor:45, quantidade:73},
    {produto:"Micropipeta", tipo:"equipamentos",valor:490, quantidade:15},
    {produto: "Acetonitrila 1l",tipo:"reagentes", valor:240, quantidade:54},
    {produto:"Metanol 1l", tipo:"reagentes", valor:155, quantidade:38},
    {produto:"Tubo de ensaio", tipo:"vidraria", valor:49, quantidade:112},
    {produto:"pipeta", tipo:"vidraria", valor:24, quantidade:39},
    {produto:"Alcool Isopropilico", tipo:"reagentes", valor:47, quantidade:15}

]

const resultado = pipeline(
    vendasLab,
    adicionarCampo,
    filtrarAltos,
    agruparPor
)

console.log(resultado)