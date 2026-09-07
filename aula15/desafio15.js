function numeroPar(n){
    return n % 2 === 0
}

function verificar(n){
    if(numeroPar(n)){
        return "Número Par"
    } else {
        return "Número Ímpar"
    }
}

let res = verificar(7)
console.log(res)

res = verificar(8)
console.log(res)


/*REVISAR BASTANTE ISSO, USANDO UMA FUNÇÃO DENTRO DA OUTRA*/

/*FUNÇÕES CHAMANDO FUNÇÕES*/