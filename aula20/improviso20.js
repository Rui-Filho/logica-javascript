/*Improviso para aula 23  */




const produtosLaboratorios = [
    {id:1, produto:"Estufa", valor:3990,estoque:10},
    {id:2, produto:"Cromatógrafo", valor:15880, estoque:5},
    {id:3, produto:"Micropipeta", valor:850, estoque:45}
]

const produtosAtualizados = produtosLaboratorios.map(item => {
    if(item.id==2)
        return {
            ...item,
            estoque:4
        }
     else {
        return  item
        
    }
})

const valorgrande = produtosAtualizados.filter(item => item.valor*item.estoque>=39000)

const valorGlobal = valorgrande.reduce((ac,n)=> ac+n.estoque*n.valor,0)

console.log(produtosAtualizados)

console.log(valorgrande)

console.log(valorGlobal)


