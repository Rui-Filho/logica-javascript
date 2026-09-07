/* Improviso para   */


function filtrarPor(lista,tipo){
    return lista.reduce((ac,item)=> {
        const valor = item[tipo]
        if(!ac[valor]){
            ac[valor]=[]            
        } 
            ac[valor].push(item)
        
        return ac
    }, {})
}


const clubes = [
    {clube:"Malta", estado: "SP"},
    {clube:"RPA", estado: "RS"},
    {clube:"Bremer", estado:"RJ"},
    {clube:"Racing Fussball", estado:"RS"},
    {clube:"Guanabara", estado:"RJ"},
    {clube:"GM", estado:"SP"},
    {clube:"Industrial", estado:"SP"}
]

const resultado= filtrarPor(clubes,"estado")
console.log(resultado)


