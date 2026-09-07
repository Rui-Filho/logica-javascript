/* Usando reduce para agrupar e somar;
* Usando object values para transformar objeto em array;
* Usando sort para ordenar, do maior para o menor (Ranking)
* Usando slice para separar os 2 primeiros

*/


function top3vendedor(lista){

    return Object.values(
    lista.reduce((ac,item)=> {
        const vendedor = item.vendedor
        
        if(!ac[vendedor]){
            ac[vendedor] = {
                vendedor,
                total:0
            }
        }   

        ac[vendedor].total += item.valor


        return ac

    },{})
)

    .sort((a,b)=> b.total-a.total)
    .slice(0,2)

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


const resultado = top3vendedor(vendas)

console.log(resultado)