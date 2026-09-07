/* DESAFIO23 - COMPOSIÇÃO DE FUNÇÕES - ESTRUTURA MODULAR*/


function adicionarParticipacoes (lista){   
    
    return lista.map(item => ({
        ...item,
        participacoes:item.gols+item.assistencias


    }))
}

function filtrarElite(lista){
    return lista.filter(item => item.participacoes>=30)
}

function resumir(lista){
    return lista.reduce((ac, n) => {
        ac.totalParticipacoes += n.participacoes
        ac.quantidadeJogadores += 1
        return ac
    }, {
        
        totalParticipacoes:0,
        quantidadeJogadores:0
    })
}



const jogadores = [
    { nome: "Messi", gols: 30, assistencias: 12 },
    { nome: "Cristiano", gols: 28, assistencias: 5 },
    { nome: "Neymar", gols: 18, assistencias: 15 },
    { nome: "Suárez", gols: 10, assistencias: 6 },
    { nome: "Mbappé", gols: 35, assistencias: 8 }
]

const resultado = resumir(
    filtrarElite(
        adicionarParticipacoes(jogadores)
    )
)

console.log(resultado)



