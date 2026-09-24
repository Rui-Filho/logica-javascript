

/* Improviso Aula 37 - Nível 3 

REVISAR BEM ESTE EXERCÍCIO

*/

const vendas = [

    { vendedor: "Ana", produto: "Notebook", valor: 3500 },
    { vendedor: "Ana", produto: "Mouse", valor: 500 },
    { vendedor: "Ana", produto: "Teclado", valor: 800 },
    { vendedor: "Ana", produto: "Monitor", valor: 1500 },

    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Carlos", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Notebook", valor: 4200 },
    { vendedor: "Carlos", produto: "Mouse", valor: 350 },

    { vendedor: "Joao", produto: "Notebook", valor: 3000 },
    { vendedor: "Joao", produto: "Mouse", valor: 700 },
    { vendedor: "Joao", produto: "Teclado", valor: 600 },
    { vendedor: "Joao", produto: "Monitor", valor: 1800 },

    { vendedor: "Marina", produto: "Notebook", valor: 3800 },
    { vendedor: "Marina", produto: "Mouse", valor: 450 },
    { vendedor: "Marina", produto: "Teclado", valor: 750 },
    { vendedor: "Marina", produto: "Monitor", valor: 1600 },

    { vendedor: "Pedro", produto: "Notebook", valor: 3200 },
    { vendedor: "Pedro", produto: "Mouse", valor: 550 },
    { vendedor: "Pedro", produto: "Teclado", valor: 900 },
    { vendedor: "Pedro", produto: "Monitor", valor: 1400 },

    { vendedor: "Lucia", produto: "Notebook", valor: 4100 },
    { vendedor: "Lucia", produto: "Mouse", valor: 600 },
    { vendedor: "Lucia", produto: "Teclado", valor: 850 },
    { vendedor: "Lucia", produto: "Monitor", valor: 1750 }

]

console.log(veriricarVendedor(vendas,500))

function veriricarVendedor(lista,valorMinimo){

    const resultado = []

    const vendedores = []

    lista.forEach(item => {
        if(!vendedores.includes(item.vendedor)){
            vendedores.push(item.vendedor)
        }
        
    })



    vendedores.forEach(vendedor=> {

        const vendasDeCadaVendedor = lista.filter(item => {
            return item.vendedor===vendedor
        })


        if(vendasDeCadaVendedor.every(item => item.valor>=valorMinimo)){
            resultado.push(vendedor)
        }

    })





    return resultado



}