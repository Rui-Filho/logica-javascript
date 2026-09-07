/* desafio nivel alto: Consegui finalizar, e tirei algumas dúvidas em pesquisa*/


function relatorioVendas(...produtos){

    return produtos.map( item => {

        const total = item.preco*item.quantidade

        return {
        ...item,
        total,
        categoria: total>=2000? "Venda alta.": "Venda normal."
        }
    })    
    
    }


const produtosTransformados = relatorioVendas(
   {nome: "Notebook", preco:4500, quantidade: 2},
   {nome: "Celular", preco: 800, quantidade:6},
   {nome: "Ps5", preco: 5000, quantidade:1},
   {nome: "Mouse", preco: 80, quantidade:4}

)

const somaTotal = produtosTransformados.reduce((ac, n) => ac+n.preco*n.quantidade,0)

const resultado = {
   
        produtosTransformados,
        faturamentoTotal: somaTotal
   }
   

   





console.log(resultado)



 










/*  DESAFIO FINAL — Relatório Inteligente de Vendas

Você deve criar uma função que receba vários produtos usando REST.

📦 Dados esperados na função

Cada produto terá esse formato:

{ nome: "Notebook", preco: 4500, quantidade: 2 }
🎯 O que sua função deve fazer

Crie uma função chamada relatorioVendas que:

1️⃣ Receba qualquer quantidade de produtos (REST)
function relatorioVendas(...produtos)
2️⃣ Para cada produto:

Calcule total = preco * quantidade

Classifique como:

"Venda Alta" se total >= 2000

"Venda Normal" se menor

Use map + spread

3️⃣ Retorne um objeto final contendo:
{
   produtos: [...produtosTransformados],
   faturamentoTotal: somaDeTodosOsTotais
}

Use reduce para calcular o faturamento.

🧠 Exemplo de uso esperado
relatorioVendas(
   { nome: "Notebook", preco: 4500, quantidade: 1 },
   { nome: "Mouse", preco: 80, quantidade: 3 }
)

Deve retornar algo como:

{
   produtos: [
      { nome: "Notebook", preco: 4500, quantidade: 1, total: 4500, categoria: "Venda Alta" },
      { nome: "Mouse", preco: 80, quantidade: 3, total: 240, categoria: "Venda Normal" }
   ],
   faturamentoTotal: 4740
}
🚨 Regras

✔ Usar REST na função
✔ Usar map
✔ Usar spread
✔ Usar reduce
✔ Não mutar nada

Isso aqui fecha Aula 19, 20 e 21 de uma vez.  */