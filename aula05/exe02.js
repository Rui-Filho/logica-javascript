let plano = "premium"

switch(plano){
    case "basico":
        console.log("40 horas de estudo")
        break

    case "premium":
        console.log("65 horas de estudo e mais 1 curso complementar ")
        break

    case "vip":
        console.log("Horas ilimitadas de estudo e mais 3 cursos complementares")
        break

    default:
        console.log("Plano inexiste")
}