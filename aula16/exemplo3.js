function maiorNumero(lista) {

    let maior = lista[0]

    for(let i = 1; i < lista.length;i++){
        if(lista[i] > maior){
            maior = lista[i]
        }
    }

    return maior
}

const numerosLista = [4,9,2,15,1]
const res = maiorNumero(numerosLista)
console.log(res)





