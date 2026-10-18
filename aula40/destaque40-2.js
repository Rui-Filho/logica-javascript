/* Para entender  */ 

const lista = ["A", "B", "A", "C", "A"]

let indice = lista.indexOf("A")
indice = lista.indexOf("A", indice + 1)
indice = lista.indexOf("A", indice + 1)
indice = lista.indexOf("A", indice + 1)

console.log(indice)