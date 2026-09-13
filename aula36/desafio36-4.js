/* Aula 36 - Nível 4   */


const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", produto: "Mesa", valor: 1500 }
]

const resultado = verificarVendedores(vendas,2000)

console.log(resultado)

function verificarVendedores(lista,valorMinimo){

    const resultado = lista.reduce((ac,item)=> {

        const vendedor = item.vendedor
        if(!ac.aprovados.includes(vendedor)&&!ac.reprovados.includes(vendedor)){

        if(lista.some(dado => dado.vendedor===vendedor&&dado.valor>=valorMinimo)){
            ac.aprovados.push(vendedor)
        } else {
            ac.reprovados.push(vendedor)
        }

        }

        return ac

    },{
        aprovados:[],
        reprovados:[],

    })

    return resultado



}