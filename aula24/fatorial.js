 /* Treinando fatorial de um número  */



 function fat(n){
    let fatorial = 1
    for( n ; n > 1;n--){

        fatorial *= n
    }
    
    return fatorial
 }

 const resultado = fat(8)
 console.log(resultado)