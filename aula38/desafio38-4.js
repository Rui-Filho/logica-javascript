// Aula 38 - Nível 4
const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 3500 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Ana", produto: "Mouse", valor: 500 },
    { vendedor: "Joao", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Notebook", valor: 4200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1500 },
    { vendedor: "Joao", produto: "Notebook", valor: 3800 },
    { vendedor: "Carlos", produto: "Mouse", valor: 600 }
]

function analisarPrimeiraVenda(lista,vendedor,valorMinimo){

    const indice = lista.findIndex(item => item.vendedor===vendedor&&item.valor>=valorMinimo)      
    

    const resultado = {
        vendedor,
        indice,           
    }

    if(indice === -1){
        resultado.valor = null
    } else {
        resultado.valor = lista[indice].valor
    }    

    return resultado
    
}

console.log(analisarPrimeiraVenda(vendas, "Ana", 1000))

console.log(analisarPrimeiraVenda(vendas, "Carlos", 4000))

console.log(analisarPrimeiraVenda(vendas, "Joao", 5000))
