
/* Refiz o exercício denovo para fixar a mecânica, com outras informações*/

const clubes = [
    {clube: "Grêmio", libertadores: 3},
    {clube: "Flamengo", libertadores:4},
    {clube: "Internacional", libertadores:2},
    {clube: "Mirassol", libertadores: 0}

]

const gigantes = clubes.filter( time => time.libertadores>=3)

/*Usando destructuring (desestruturação) aqui abaixo:*/


const tradicao = gigantes.map( ({clube, libertadores})=> ({    
            clube,
            libertadores,
            frase:"Clube com tradição continental"


}))



console.log(tradicao)


/*


const tradicao = clubes.map( time => ({
    clube: time.clube,
    tradicao: time.libertadores>=3? "Gigante das américas" : "Clube de média expressão"
})

)

console.log(tradicao)
*/