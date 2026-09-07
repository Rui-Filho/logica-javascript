/* TREINANDO NA REVISÃO: Criando filter utilizando reduce  */



function verificarImpar(lista,regra){
    return lista.reduce((ac,item)=>{
        if(regra(item)){
            ac.push(item)
                    }
     return ac
    },[])

}



const numeros = [1,2,3,4,5,8,7,5,2,6,9,88,55,24,8,5,697,5,5,255,84,5,2,6,9]

const resultado = verificarImpar(numeros,item => item%2!==0)

console.log(resultado)