
/* Desafio aula 24 - Nível 4*/

/* Refazer este exercícios com outros dados para praticar a mecânica  */


function agruparPor(lista,chave){
    return lista.reduce((ac,item)=> {
        
        const valor = item[chave]
        if(!ac[valor]){
            ac[valor]=[]
            ac[valor].push(item)
        } else {
            ac[valor].push(item)
        }

        return ac

    }, {} )
}


const pessoas = [
    { nome: "Ana", cidade: "Porto Alegre" },
    { nome: "João", cidade: "São Paulo" },
    { nome: "Maria", cidade: "Porto Alegre" },
    { nome: "Pedro", cidade: "São Paulo" },
    { nome: "Lucas", cidade: "Curitiba" }
]

const resultado = agruparPor(pessoas,"cidade")

console.log(resultado)