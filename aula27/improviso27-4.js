/* IMPROVISO DO NÍVEL 4   */

const config = {
    impostoCbf:8,
    maioresFolha:35,
    mostrarFolha:true
}

function composicaoDeFuncoes(...funcoes){
    return function(lista){
        return funcoes.reduce((lista,funcao)=> {
            return funcao(lista)
        }, lista)
    }
}

function processarConfig(lista,config){
    const funcoes = []

    if(config.impostoCbf){
        funcoes.push(impostoCbf(config.impostoCbf))
    }

    if(config.maioresFolha){
        funcoes.push(maioresFolha(config.maioresFolha))
    }

    if(config.mostrarFolha){
        funcoes.push(mostrarFolha)
    }
    const processar = composicaoDeFuncoes(...funcoes)

    return processar(lista)
}

function impostoCbf(porcentagem){
    return function(lista){
        return lista.map(item => {
            return{
                ...item,
                folhaSalarial:item.folhaSalarial+(item.folhaSalarial*porcentagem/100)
            }
        })
    }

}

function maioresFolha(valorMin){
    return function(lista){
        return lista.filter(item => item.folhaSalarial>valorMin)
    }
}

function mostrarFolha(lista){
    return lista.map(item => item.folhaSalarial)
}


const clubes = [
    {clube:"Malta", folhaSalarial:35},
    {clube:"Bremer", folhaSalarial:33},
    {clube:"GM", folhaSalarial:41},
    {clube:"Guanabara", folhaSalarial:38},
    {clube:"Industrial", folhaSalarial:28},
    {clube:"Spor Nacional" , folhaSalarial:19},
    {clube:"RPA", folhaSalarial:29},
    {clube:"Racing", folhaSalarial:23}
]

const resultado = processarConfig(clubes,config)

console.log(resultado)