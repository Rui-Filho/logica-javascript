/* Aula 28 — Nível 3
📊 Ranking por categoria   */


const vendas = [
    { vendedor: "Ana", categoria: "Eletrônicos", valor: 4500 },
    { vendedor: "Joao", categoria: "Eletrônicos", valor: 200 },
    { vendedor: "Ana", categoria: "Móveis", valor: 1200 },
    { vendedor: "Carlos", categoria: "Eletrônicos", valor: 800 },
    { vendedor: "Joao", categoria: "Móveis", valor: 900 },
    { vendedor: "Ana", categoria: "Eletrônicos", valor: 1500 }
]


const resultado = rankingPorCategoria(vendas)

console.log(resultado)

function rankingPorCategoria(lista){
    const resultado = lista.reduce((ac,item)=> {

        const categoria = item.categoria

        if(!ac[categoria]){
            ac[categoria]= {}
        }

        const vendedor = item.vendedor

        if(!ac[categoria][vendedor]){
            ac[categoria][vendedor]={
                vendedor,
                total:0
            }
        }  
        
        ac[categoria][vendedor].total += item. valor

        return ac

    },{})

    
        /* Reestudar esta parte, pois ainda estão subentendido   */
         Object.keys(resultado).forEach(item => {

           resultado[item] = Object.values(resultado[item])

           .sort((a,b)=> b.total-a.total)

        })


    return resultado


}




