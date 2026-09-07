/* IMPROVISANDO PARA TREINAR A MECÂNICA*/


function relatorioConcacaf(...dados){
    


    const dadosTransformados = dados.map(item => {
        const total= item.conference+item.ny

        return {
            ...item,
            total,
            status: total>=3? "Clubes do topo da Concacaf":"Clubes emergentes."
        }
    })

    const somaGlobal = dadosTransformados.reduce((ac,item)=> ac+item.total,0)

    return       { 
     dadosTransformados,
     somaGlobal

    }    


}



const resultado = relatorioConcacaf(
    {clube:"Red Bull New York-EUA", conference:4,ny:4},
    {clube:"Juarez Soles-MEX", conference:3,ny:0},
    {clube:"South Caroline Unidt-EUA", conference:2, ny:1},
    {clube:"La Ciudad-MEX", conference:2, ny:0},
    {clube:"Montreal Impact-CAN", conference:2, ny:0}
)

console.log(resultado)