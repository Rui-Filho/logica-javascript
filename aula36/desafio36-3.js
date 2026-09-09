/* Aula 36 - Nível 3   */

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", produto: "Mesa", valor: 1500 }
]

const resultado = gerarRelatorio(vendas,2000)

console.dir(resultado,{depth:null})

function gerarRelatorio(lista,valorMinimo){

    const resultado = Object.values(lista.reduce((ac,item)=> {

        const vendedor = item.vendedor
        if(!ac[vendedor]){
            ac[vendedor] = {
                vendedor,
                vendas:[],
                temVendaAlta:false
            }
        }

        ac[vendedor].vendas.push(item)


        return ac

    },{}))

    resultado.forEach( vendedor => {

        if(vendedor.vendas.some(item => item.valor>=valorMinimo)){
            vendedor.temVendaAlta=true
        }            


    })

    return resultado

}

