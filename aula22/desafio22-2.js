/* SEGUNDO DESAFIO AULA 22*/

const jogadores = [
    {nome: "Messi", gols:30, assistencias:12},
    {nome: "Cristiano", gols:28, assistencias:5},
    {nome: "Neymar", gols:18, assistencias:15},
    {nome: "Suárez", gols:10, assistencias:6},
    {nome: "Mbappé", gols:35, assistencias:8}
]

const resultado = jogadores
.map(item => ({
    ...item,
    participacoes: item.gols+item.assistencias
    
}))
.filter(item => item.participacoes>=30)


/* O reduce abaixo está somando o número de participações e também o número de jogadores, somando cada objeto. */ 

.reduce((ac,item) => {
    ac.totalParticipacoes += item.participacoes
    ac.quantidadeJogadores += 1
    return ac
    } , {
        totalParticipacoes:0,
        quantidadeJogadores:0
    })



console.log(resultado)


