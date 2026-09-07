const albuns= [
    {album: "Ok Computer", banda: "Radiohead", nota: 9},
    {album: "The dark side of the moon", banda: "Pink Floyd", nota: 10},
    {album: "The Resistence", banda: "Muse", nota: 7},
    {album: "A beleza do caos no jardim das almas perdidas", banda: "Bloco", nota:6}
]

const albunsBons = albuns.map(({album,banda,nota}) => {

    let frase

    if(nota>=9){
        frase = "Álbum épico e atemporal: Melhores da história!"
    } else if(nota>=7){
        frase = "Bom álbum de rock!"
    } else {
        frase = "Álbum de banda undeeground local, razoável, mas melhor que VM"
    }

    

    return {
        album,
        banda,
        resultado:frase
    }


})




console.log(albunsBons)