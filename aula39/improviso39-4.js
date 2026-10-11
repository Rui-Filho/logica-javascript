/* Improviso 39 - Nível 4   */

const vendedores = [
    "Bruno",
    "Camila",
    "Diego",
    "Fernanda",
    "Gabriel",
    "Helena",
    "Igor",
    "Juliana",
    "Lucas",
    "Mariana",
    "Nicolas",
    "Patricia",
    "Rafael",
    "Sabrina",
    "Thiago",
    "Vanessa",
    "William",
    "Yasmin",
    "Eduardo",
    "Beatriz"
]

const vendedoresComVenda = [
    "Camila",
    "Gabriel",
    "Juliana",
    "Lucas",
    "Patricia",
    "Rafael",
    "Thiago",
    "William",
    "Beatriz",
    "Fernanda",
    "Eduardo",
    "Yasmin"
]


function gerarRelatorio(lista,vendedoresComVenda){

    const resultado  = []

    lista.forEach(item => {

        const nome = item
        const existe = lista.includes(nome)
        const temVenda = vendedoresComVenda.includes(nome)
        const indice = lista.findIndex(item => item===nome)

        const dadosDeCadaVendedor = {            
            nome,
            existe,
            temVenda,
            indice
        }

        resultado.push(dadosDeCadaVendedor)
        
        

        
    })

    return resultado

}

console.log(gerarRelatorio(vendedores,vendedoresComVenda))