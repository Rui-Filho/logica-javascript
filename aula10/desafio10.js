const filaBanco = []
filaBanco.push("Senha 01")
filaBanco.push("Senha 02")
filaBanco.push("Senha 03")

const atendimento = filaBanco.shift()
console.log(`Atenção! ${atendimento} em atendimento. Os próximos que serão atendidos são: ${filaBanco}`)