/* Refiz o desafio com outros dados para treinar a mecânica */




/* Função criada utilizando REST, como parâmetro flexível  */
function relatorioComebol(...dados){

    const dadosTransformados = dados.map(item => {

        let totalTitulos= item.mundial+item.libertadores+item.sudamericana+item.recopa

        return {
            ...item,
            totalTitulos,
            status: totalTitulos>=8? "Clube Gigante e lendário da Comeboll": "Clube tradicional"

        }
    })

    const somaTitulos = dadosTransformados.reduce((ac, item)=> ac+item.totalTitulos,0)


    return {
        dadosTransformados,
        somaTitulos
        
    }

}



const resultado = relatorioComebol(
    {clube: "Boca Junior-ARG",mundial:3, libertadores:6, sudamericana:2, recopa:4},
    {clube: "Flamengo-BRA", mundial: 1, libertadores:4, sudamericana:0,recopa:1},
    {clube:"Grêmio-BRA", mundial:1, libertadores:3, sudamericana:0,recopa:2},
    {clube: "Internacional-BRA", mundial:1, libertadores:2, sudamericana:1, recopa:2},
    {clube: "LDU-EQU", mundial:0, libertadores:1, sudamericana:2, recopa:2},
    {clube: "River Plate-ARG",mundial:1, libertadores:4, sudamericana:2,recopa:3},
    {clube: "Palmeiras-BRA", mundial:0, libertadores:3, sudamericana:0, recopa:1},
    {clube: "Olimpia-PAR", mundial:0,libertadores:3, sudamericana:0, recopa:2}

)

console.log(resultado)