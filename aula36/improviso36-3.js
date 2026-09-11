/* Improviso Nível 3  - Aula 36  */

const vendas = [

    { vendedor: "Mariana", produto: "Notebook", valor: 5200 },
    { vendedor: "Pedro", produto: "Mouse", valor: 180 },
    { vendedor: "Mariana", produto: "Monitor", valor: 1450 },
    { vendedor: "Lucas", produto: "Teclado", valor: 350 },
    { vendedor: "Fernanda", produto: "Cadeira", valor: 1200 },
    { vendedor: "Pedro", produto: "Headset", valor: 480 },
    { vendedor: "Lucas", produto: "Webcam", valor: 620 },
    { vendedor: "Mariana", produto: "SSD", valor: 750 },
    { vendedor: "Fernanda", produto: "Mesa", valor: 1800 },
    { vendedor: "Pedro", produto: "Placa de vídeo", valor: 3200 },
    { vendedor: "Lucas", produto: "Gabinete", valor: 890 },
    { vendedor: "Fernanda", produto: "Impressora", valor: 1350 },
    { vendedor: "Mariana", produto: "HD externo", valor: 550 },
    { vendedor: "Pedro", produto: "Microfone", valor: 720 },
    { vendedor: "Lucas", produto: "Roteador", valor: 430 }

]

const resultado = relatorio(vendas,2000)

console.dir(resultado,{depth:null})

function relatorio(lista,valorMinimo){

    const resultado = Object.values(lista.reduce((ac,item)=> {

        const vendedor = item.vendedor
        if(!ac[vendedor]){
            ac[vendedor] = {
                vendedor,
                vendas:[],
                temVendaAlta:false,
            }
        }
        ac[vendedor].vendas.push(item)

        return ac

    },{}))

    resultado.forEach(dados => {
        if(dados.vendas.some(item => item.valor>=valorMinimo)){
            dados.temVendaAlta = true
        }
    })



    return resultado


}