const temporada = [
    {clube: "Malta-BRA",liga: 52, assensso:1},
    {clube: "Riverside-ARG",apex:1,liga:73},
    {clube: "Bremer-BRA",apex:3,liga:36},
    {clube: "GM-BRA",apex:1, liga:36,assensso:2},
    {clube: "Valenciano-ARG", liga:37}   

]   

const numeros = temporada.filter(({apex=0,liga,assensso=0}) => liga+assensso+apex>50)
console.log(numeros)

const media = temporada.reduce((ac,item) => ac+item.liga+(item.apex ?? 0)+(item.assensso ?? 0),0)/temporada.length
console.log(media)


    
    
    const mostrar = temporada.map(({clube: time, apex="Sem título",liga,assensso="Sem título"}) => ({        
            time,
            apex,
            liga,
            assensso    
}))

console.log(mostrar)