/* Desafio 20*/

/* A necessidade aqui era alterar uma propriedade específica dentro de um objeto específico. Retornava uma propriedade com valor atualizado, ou então retornava o objeto normal.  */


const produtos = [
    {id:1, nome: "Notebook", estoque: 10},
    {id:2, nome: "Mouse", estoque:25},
    {id:3, nome: "Teclado", estoque:15}
]

const produtosAtual = produtos.map(item => {

    if(item.id===2)
        return {
          ...item,
          estoque:20          
    }  
    
    else   {
        return  item
    }

   
    
    

})

console.log(produtosAtual)

