/* RESPOSTA Aula 39 - Nível 4   */

const vendedores = ["Ana", "Carlos", "Joao", "Marina", "Pedro"]

const vendedoresComVenda = ["Carlos", "Marina", "Pedro"]

function gerarRelatorio(lista, vendedoresComVenda){

    const resultado = []

    lista.forEach(item => {

        const nome = item
        const existe = lista.includes(nome)
        const temVenda = vendedoresComVenda.includes(nome)
        const indice = lista.findIndex(item => item===nome)

        const resultado2 = {
            nome,
            existe,
            temVenda,
            indice,
        }

        resultado.push(resultado2)


        
    })



    return resultado

}


console.log(gerarRelatorio(vendedores,vendedoresComVenda))