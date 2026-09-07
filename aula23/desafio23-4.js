/* ESTRUTURA DE REDUCE MAIS CUSTOMIZADO.

function resumir(lista,regra,inicial){
    return lista.reduce((ac,item)=>{
        return regra(ac,item)
    }, inicial)
}
    */

/* VERSÃO SIMPLIFICADA ABAIXO - MAIS PRÁTICO */
function resumir(lista,regra,inicial){
    return lista.reduce(regra,inicial)
}


const clubes = [
    { nome: "Real Madrid", gols: 90, assistencias: 60 },
    { nome: "Barcelona", gols: 85, assistencias: 70 },
    { nome: "Manchester City", gols: 95, assistencias: 80 },
    { nome: "Bayern", gols: 88, assistencias: 50 },
    { nome: "PSG", gols: 92, assistencias: 65 }
]

const resultado = resumir(clubes,(ac,clube)=> {
    ac.gols += clube.gols
    ac.assistencias += clube.assistencias
    return ac
} , {
    gols:0,
    assistencias:0
})

console.log(resultado)

