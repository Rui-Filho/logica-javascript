/* DESAFIO NÍVEL 2*/

/* PIPELINE  */



function transformar(lista,desconto){

    return lista
    .filter(item => item.preco>100)
    .map(item =>{        

        return {
            ...item,
            preco:item.preco+(item.preco*desconto/100)
        }    
    })
    .map(item => item.nome)  


}



const produtos = [
    {nome: "Notebook", preco: 3000},
    {nome: "Mouse", preco: 50}
]

const resultado = transformar(produtos,20)

console.log(resultado)