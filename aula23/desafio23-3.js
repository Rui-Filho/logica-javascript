
function adicionarCampo(lista,propriedade,calculo){
    return lista.map(item => ({
        ...item,
        [propriedade]:calculo(item)
    }))
}

function filtrarPor(lista,regra){
    return lista.filter(item => regra(item))
}

function resumirPor(lista,campo){
    return lista.reduce((ac,n) => {
        ac.soma += n[campo]
        ac.quantidade += 1
        return ac
    },
    {
        soma:0,
        quantidade:0
    }
    )

}

const clubes = [
    { nome: "Real Madrid", gols: 90, assistencias: 60 },
    { nome: "Barcelona", gols: 85, assistencias: 70 },
    { nome: "Manchester City", gols: 95, assistencias: 80 },
    { nome: "Bayern", gols: 88, assistencias: 50 },
    { nome: "PSG", gols: 92, assistencias: 65 }
]

const resultado = resumirPor(
filtrarPor(
adicionarCampo(clubes,"participacoes",n => n.gols+n.assistencias),
n => n.participacoes>=150),
"participacoes"
)

console.log(resultado)



