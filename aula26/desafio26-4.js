/* Desafio Nível 4 - aula 26   */
/*   
Usando reduce para somar totais por vendedor;
mostrando tb no acumulardor o melhor através da comparação, para ver quem é melhor, sem usar sort.
e no final o INSIGHT, retornando somente o melhor, criando uma variável resultado dentro da função e no final retornando resultado.melhor, para acessar melhor dentro do AC, e retornar somente este valor.
*/

function melhorVendedor(lista){
    const resultado = lista.reduce((ac,item)=> {
        const vendedor = item.vendedor
        ac.totais[vendedor]= (ac.totais[vendedor]||0)+item.valor
        const totalAtual = ac.totais[vendedor]

        if(!ac.melhor||totalAtual>ac.melhor.total){
            ac.melhor = {
                vendedor,
                total: totalAtual
            }
        }

        return ac

    }, {
        totais:{},
        melhor: null
    })

    // Esta linha aqui abaixo é o insgiht do exercício
    return resultado.melhor
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

const resultado = melhorVendedor(vendas)

console.log(resultado)