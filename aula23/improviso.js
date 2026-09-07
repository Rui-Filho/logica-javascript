
/*  Improviso para treinar raciocício e mecânica de composição de funções, estrutura modular, abstração*/

function somarTitulos(lista,calculo){
    return lista.map(item => ({
        ...item,
        titulosTotais:calculo(item)
    }))
}

function filtrarGigantes(lista,regra){
    return lista.filter(item => regra(item))
}

function resumo(lista,propriedade){
    return lista.reduce((ac,n)=> {
        ac.somaTitulosTotais += n[propriedade]
        ac.quantidadeClubes ++
        return ac
    } , {
        
        somaTitulosTotais:0,
        quantidadeClubes:0

    } )
}


const dadosTemporada = [
    {clube:"Malta-BRA", campeaoAmerica:36, ligaNacional:57, mundial:18},
    {clube: "Riverside-ARG", campeaoAmerica:28, ligaNacional:73, mundial:7},
    {clube:"GM-BRA",campeaoAmerica:26, ligaNacional:36, mundial:10},
    {clube:"Bremer-BRA", campeaoAmerica:21, ligaNacional:37,mundial:8},
    {clube: "Real Porto Alegre-BRA", campeaoAmerica:17,ligaNacional:21,mundial:7},
    {clube:"Valenciano-ARG", campeaoAmerica:13, ligaNacional:37,mundial:5},
    {clube: "SNN-BRA", campeaoAmerica:11, ligaNacional:9, mundial:4},
    {clube:"Nuevo Aires-ARG", campeaoAmerica:10, ligaNacional:49, mundial:4},
    {clube: "Racing Fussball-BRA", campeaoAmerica:9, ligaNacional:8,mundial:3},
    {clube: "Republyca Spañola-ARG", campeaoAmerica:9, ligaNacional:25, mundial:3}
]

const resultado=resumo(
filtrarGigantes(
somarTitulos(dadosTemporada,n => n.campeaoAmerica+n.ligaNacional+n.mundial),
n => n.titulosTotais>=45),
"titulosTotais"
)

console.log(resultado)