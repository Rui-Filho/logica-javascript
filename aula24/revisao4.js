/* REVISÃO PARA TREINAR A MECÂNICA DO ÚLTIMO DESAFIO DA AULA 24:
Aqui estamos filtrando para ter um resultado filtrando por propriedade específica   */


function filtrar(lista,propriedade){
    return lista.reduce((ac, item)=> {
        const cadaEstado = item[propriedade]
        if(!ac[cadaEstado]) {
            ac[cadaEstado]=[]
            ac[cadaEstado].push(item)
        } else {
            ac[cadaEstado].push(item)
        }

        return ac

    }, {})
}


const clubesBrasileiros = [
    {clube:"Gremio", estado: "RS"},
    {clube: "Flamengo", estado:"RJ"},
    {clube:"São Paulo", estado: "SP"},
    {clube: "Palmeiras", estado: "SP"}, 
    {clube: "Fluminense", estado: "RJ"},
    {clube:"Corinthians", estado:"SP"},
    {clube: "Internacional", estado: "RS"},
    {clube: "Santos", estado:"SP"},
    {clube: "Cruzeiro", estado: "MG"},
    {clube: "Atletico Mineiro", estado:"MG"},
]


const resultado = filtrar(clubesBrasileiros,"estado")

console.log(resultado)