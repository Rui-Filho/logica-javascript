const fila = []
fila.unshift("Cliente 1")
fila.push("Cliente 2")
fila.push("Cliente 3")

const atendido = fila.shift()
console.log(`Atendido: ${atendido}`)
console.log(`Fila atual: ${fila}`)
