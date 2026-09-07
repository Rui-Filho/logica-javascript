

/* Desafio 20 (2) */

const pedidos = [
    { id: 1, cliente: "Rui", total: 1200, pago: false },
    { id: 2, cliente: "Ana", total: 300, pago: true },
    { id: 3, cliente: "Carlos", total: 700, pago: false },
    { id: 4, cliente: "Marina", total: 1500, pago: true }
]

const pedidoPago = pedidos.map(item => {
    if(item.id===3)
        return {
           ...item,
           pago:true
    
        } 
        
        else {
            return item
        }
})

console.log(pedidoPago)


const somentePagos = pedidoPago.filter(item => item.pago==true)

console.log(somentePagos)


const somaPedidos = somentePagos.reduce((ac,pedido) => ac+pedido.total,0)
console.log(somaPedidos)