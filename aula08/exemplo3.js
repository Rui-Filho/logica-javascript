const senhaCorreta = 1234

for(let tent = 1; tent <=5; tent++){
    console.log(`Tentativa ${tent}`)

    if(tent===3){
        console.log("Login realizado com sucesso")
        break
    }
}