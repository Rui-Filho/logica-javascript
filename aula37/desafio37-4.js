/* Desafio aula 37 - Nível 4  */

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 3500 },
    { vendedor: "Ana", produto: "Mouse", valor: 500 },
    { vendedor: "Ana", produto: "Teclado", valor: 800 },

    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Carlos", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Notebook", valor: 4200 },

    { vendedor: "Joao", produto: "Notebook", valor: 3000 },
    { vendedor: "Joao", produto: "Mouse", valor: 700 },
    { vendedor: "Joao", produto: "Teclado", valor: 600 },

    { vendedor: "Marina", produto: "Notebook", valor: 3800 },
    { vendedor: "Marina", produto: "Mouse", valor: 450 },
    { vendedor: "Marina", produto: "Teclado", valor: 750 }
]

console.log(analisarVendedores(vendas,600))

function analisarVendedores(lista,valorMinimo){

    const vendedores = []

    const resultado = {
        aprovados:[],
        reprovados:[],
    }

    lista.forEach(item => {
        
        if(!vendedores.includes(item.vendedor)){
            vendedores.push(item.vendedor)
        }
    })

    vendedores.forEach(vendedor => {

        const vendasDeCadaVendedor = lista.filter(item => {
            return item.vendedor===vendedor
        })

        if(vendasDeCadaVendedor.every(item => item.valor>=valorMinimo)){
            resultado.aprovados.push(vendedor)
        } else {
            resultado.reprovados.push(vendedor)
        }

    })



    return resultado



}