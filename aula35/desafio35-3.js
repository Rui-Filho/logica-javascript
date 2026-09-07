/* Aula 35 - Nível 3   */

const vendas = [
    { vendedor: "Ana", produto: "Notebook", valor: 4500 },
    { vendedor: "Joao", produto: "Mouse", valor: 200 },
    { vendedor: "Ana", produto: "Monitor", valor: 1200 },
    { vendedor: "Carlos", produto: "Teclado", valor: 800 },
    { vendedor: "Joao", produto: "Cadeira", valor: 900 },
    { vendedor: "Ana", produto: "Mesa", valor: 1500 }
]

const resultado = relatorioVendedor(vendas,"Ana")

console.log(resultado)


function relatorioVendedor(lista,nome){

    const vendasVendedor = lista.filter(item => item.vendedor===nome)

    const relatorio = vendasVendedor.reduce((ac,item)=> {

        ac.quantidade++
        ac.total += item.valor 
        if(item.valor>ac.maiorVenda) {
            ac.maiorVenda=item.valor
        }

        if(item.valor<ac.menorVenda)  { 
            
            ac.menorVenda=item.valor 
            
        }

        const produto = item.produto
        ac.produtos.push(produto)
        

        return ac

    },{
        vendedor:nome,
        quantidade:0,
        total:0,
        maiorVenda: 0,
        menorVenda: Infinity,
        produtos:[],

    })

    relatorio.media=relatorio.total/relatorio.quantidade    



    return relatorio



}

