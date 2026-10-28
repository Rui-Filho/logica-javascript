/*Parte 2 do desafio 2*/

const vendas = [100, 250, 180, 400, 250, 300, 250]

function buscarUltimaVenda(lista,valor){

    let indice = lista.length-1

    let resultado = -1

    

    while(indice>=0){

        if(lista[indice]===valor){
            return indice
            
        } 
        

        indice--

    } 
    
    return resultado
    
    
}



console.log(buscarUltimaVenda(vendas, 250))



console.log(buscarUltimaVenda(vendas, 400))



console.log(buscarUltimaVenda(vendas, 999))