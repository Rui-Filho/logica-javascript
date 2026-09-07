/* IMPROVISANDO NO NÍVEL 3*/


function adicionarPropriedade(lista,campo,calculo){
    return lista.map(item => ({
        ...item,
        [campo]:calculo(item)        
    }))
}

function triarMaiores(lista,regra){
    return lista.filter(item => regra(item))
}

function agrupareResumirPor(lista,propriedade){
    return lista.reduce((ac,item) => {
        const tipo = item[propriedade]
        if(!ac[tipo]){
            ac[tipo]= {
                total:0,
                quantidade: 0
            }            
        }

        ac[tipo].total += item.total
        ac[tipo].quantidade ++
        return ac

    }, {})

}



function relatorioVendas(lista){
    return agrupareResumirPor(
    triarMaiores(
    adicionarPropriedade(lista,"total", item => item.valor*item.quantidade),
    item => item.total>3000
    ), "tipo")

}


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

const resultado = relatorioVendas(vendasLab)

console.log(resultado)