/* Desafio nível 2 - aula 30    */

const vendas = [
    { vendedor: "Ana", produto: "Notebook" },
    { vendedor: "Joao", produto: "Mouse" },
    { vendedor: "Ana", produto: "Monitor" },
    { vendedor: "Carlos", produto: "Teclado" },
    { vendedor: "Joao", produto: "Cadeira" },
    { vendedor: "Ana", produto: "Mesa" }
]


const resultado = gerarRelatorio(vendas)

console.log(resultado)

function gerarRelatorio(lista){

    const resultado = Object.values(lista.reduce((ac,item)=> {

        const vendedor = item.vendedor
        if(!ac[vendedor]){
            ac[vendedor] = {
                vendedor,
                quantidade:0,
                produtos:[]
            }
        }

        ac[vendedor].quantidade++

        ac[vendedor].produtos.push(item.produto)


        return ac



    },{}))

    .sort((a,b)=> b.quantidade-a.quantidade)

    return resultado

}




