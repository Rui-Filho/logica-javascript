/* Aula 34 - Nível 1   */


const vendas = [
    { vendedor: "Ana", produto: "Notebook" },
    { vendedor: "Joao", produto: "Mouse" },
    { vendedor: "Ana", produto: "Notebook" },
    { vendedor: "Carlos", produto: "Teclado" },
    { vendedor: "Joao", produto: "Mouse" },
    { vendedor: "Ana", produto: "Mesa" }
]

const resultado = maisVendido(vendas)

console.dir(resultado,{depth:null})

function maisVendido(lista){

    const resultado = Object.values(lista.reduce((ac,item)=> {

        const vendedor = item.vendedor
        if(!ac[vendedor]){
            ac[vendedor] = {
                vendedor,
                produtos:{}
            }
        }

        const produto = item.produto
        if(!ac[vendedor].produtos[produto]){
            ac[vendedor].produtos[produto] = 0            
        }

        ac[vendedor].produtos[produto]++

        return ac

    },{}))

    

    //Revisar bem a lógica abaixo

     resultado.forEach(vendedor=>{

        let maiorQuantidade = 0

        let produtoMaisVendido = ""

        Object.entries(vendedor.produtos).forEach(([produto, quantidade])=>{

            if(quantidade > maiorQuantidade){

                maiorQuantidade = quantidade

                produtoMaisVendido = produto

            }

        })

        vendedor.produtoMaisVendido = produtoMaisVendido

        delete vendedor.produtos

    }) 

    

    return resultado

}