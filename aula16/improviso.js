function ehPar(n){
    if(n%2===0){
        return true
    } else {
        return false
    }
}

function verificar(numero){
    if(numero===true){
        return "Número Par"
    } else {
        return "Número Ímpar"
    }
    
}

const verNumero = ehPar(9)
const res = verificar(verNumero)
console.log(res)