/* IMPROVISO PARA TREINAR REDUCE, AGRUPAR POR CATEGORIA E RESUMIR VALORES*/

function verificarTitulosPorPais(lista,categoria){
    return lista.reduce((ac,item)=> {
        const cadaPais = item[categoria]
        if(!ac[cadaPais]){
            ac[cadaPais]={
                total:0,
                quantidaDeClubes:0
            }
        }       

        ac[cadaPais].total += item.quantidade
        ac[cadaPais].quantidaDeClubes ++
        return ac
    }, {})

}



const campeoesApex = [
    {clube:"Bremer", pais:"Brasil", quantidade:3},
    {clube:"Independiente B.Aires", pais:"Argentina", quantidade:3},
    {clube: "Barranquilha", pais:"Colombia", quantidade:1},
    {clube:"Gm Porto-Alegrense", pais:"Brasil", quantidade:1},
    {clube:"SNN", pais:"Brasil", quantidade:1},
    {clube:"America del Chile", pais:"Chile", quantidade:1},
    {clube:"Valparais", pais:"Chile", quantidade:1},
    {clube:"Riverside", pais:"Argentina", quantidade:1},
    {clube:"Assuncion", pais:"Paraguay", quantidade:1},
    {clube:"Union Quito", pais:"Equador", quantidade:1},
    {clube:"GM", pais:"Brasil", quantidade:1},
    {clube: "Esgryma La Plata", pais:"Argentina",quantidade:1},
    {clube:"San Diego", pais:"Argentina", quantidade:1}
]

const resultado = verificarTitulosPorPais(campeoesApex,"pais")

console.log(resultado)