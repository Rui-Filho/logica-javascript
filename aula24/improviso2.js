
function processo(valor,...funcoes){
    return funcoes.reduce((v,f)=> f(v),valor)
}



const resultado = processo(
    73,
    n => n * 10,
    n => n + 1000,
    n => n * 2,
    n => n/4
)

console.log(resultado)