/* Desafio 28 - Nível 4  */

const vendas = [
    { vendedor: "Ana", categoria: "Eletrônicos", valor: 4500 },
    { vendedor: "Joao", categoria: "Eletrônicos", valor: 200 },
    { vendedor: "Ana", categoria: "Móveis", valor: 1200 },
    { vendedor: "Carlos", categoria: "Eletrônicos", valor: 800 },
    { vendedor: "Joao", categoria: "Móveis", valor: 900 },
    { vendedor: "Ana", categoria: "Eletrônicos", valor: 1500 }]


const resultado = reletorioPorCategoria(vendas)

//Coisa nova aqui abaixo
console.dir(resultado, {depth:null})



function reletorioPorCategoria(lista){
    const resultado = lista.reduce((ac,item)=> {
        const categoria = item.categoria
        if(!ac[categoria]){
            ac[categoria]= {
                totalCategoria:0,
                vendedores:{}
            }
        }

        ac[categoria].totalCategoria += item.valor



        const vendedor = item.vendedor
        if(!ac[categoria].vendedores[vendedor]){
            ac[categoria].vendedores[vendedor] = {
                vendedor,
                total:0
            }
        }        

        ac[categoria].vendedores[vendedor].total += item.valor        

        return ac


    },{})

     // Nova abordagem
    Object.keys(resultado).forEach(item => {    
        
        resultado[item].vendedores = Object.values(resultado[item].vendedores)

        .sort((a,b)=> b.total-a.total)

        resultado[item].melhorVendedor =  resultado[item].vendedores[0]
        
    })

    
    return resultado

    
}



