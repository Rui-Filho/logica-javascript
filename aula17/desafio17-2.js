/*desafio 17 melhorado com teste de erro, sugestão profissional*/


const notas = [6,6,6,5,4,5,7,8,8,7,5,9,10,9,8,7,7,7,6,7,8,10,5,3]

const aprovados = notas.filter(n => n>=7)

console.log(`Notas dos alunos da turma: ${notas}`)

if(aprovados.length===0){

    console.log("Não há alunos aprovados.")
    
}  else {

    const media = aprovados.reduce((ac,cn)=> ac+cn,0)/aprovados.length

    console.log(`Notas dos aprovados: ${aprovados}`)
    console.log(`A média das notas dos aprovados é de ${media}`)

}
    




