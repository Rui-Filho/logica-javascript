/*  Desafio Aula 26 Nível 1  - REFVISAR MUITO BEMMMM, NOVOS CONCEITOS */




function somarTotaisPorVendedor(lista){
    return lista.reduce((ac,item)=> {
        const vendedor = item.vendedor
        if(!ac[vendedor]){
            ac[vendedor]= { 
                vendedor,                               
                total:0
            }
        }
        ac[vendedor].total += item.valor
        return ac

    },{})
}


/* PRINCIPALMENTE AQUI, REVISAR: USANDO REDUCE PARA COMPARAR E MOSTRAR O MAIOR, OU MELHOR*/

function verificarMaior(lista){
    return lista.reduce((ac,item) => {
        if(item.total>ac.total){
            return item
        }            
        
        return ac
    })

}



const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", produto: "Mesa", valor: 1500 },
    { vendedor: "Carlos", produto: "Mouse", valor: 100 }
]


const resultado = verificarMaior(
Object.values(somarTotaisPorVendedor(vendas))
)



console.log(resultado)
