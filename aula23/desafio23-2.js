/* Desafio 23 Nível 2 (Abstração real)*/

function adicionarCampo(lista,calculo){
    return lista.map(item => ({
        ...item,
        valorCalculado:calculo(item) 
    }))
}

function filtrarPor(lista,criterio){
    return lista.filter(item => criterio(item))

}

function resumirPor(lista,campo){
    return lista.reduce((ac,n) => {
        ac.soma += n[campo]
        ac.quantidade+=1
        return ac
    },{
        soma:0,
        quantidade:0
    })
}


const jogadores = [
    { nome: "Messi", gols: 30, assistencias: 12 },
    { nome: "Cristiano", gols: 28, assistencias: 5 },
    { nome: "Neymar", gols: 18, assistencias: 15 },
    { nome: "Suárez", gols: 10, assistencias: 6 },
    { nome: "Mbappé", gols: 35, assistencias: 8 }
]

const resultado = resumirPor(
                      filtrarPor(
                          adicionarCampo(jogadores,j => j.gols+j.assistencias), 
                          j => j.valorCalculado>=30),
                 "valorCalculado"
    
)

console.log(resultado)

