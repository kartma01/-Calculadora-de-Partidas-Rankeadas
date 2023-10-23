let jogo = ranqueada("joao",20,30)

console.log(jogo)

function ranqueada(nome,vitoria, derota){
    let total = vitoria - derota
    let nivel = ""
    if(total <= 10 ){
        nivel = "Ferro"
    } else if (total >= 11 && total <= 20){
        nivel = "Bronze"
    }else if (total >= 21 && total <= 50){
        nivel = "Prata"
    }else if (total >= 51 && total <= 80){
        nivel = "Ouro"
    }else if (total >= 81 && total <= 90){
        nivel = "Diamante"
    }else if (total >= 91 && total <= 100){
        nivel = "Lendário"
    }else if (total >= 101){
        nivel = "Imortal"
    }
    return `O herói ${nome} tem de saldo de ${total} e está no nível de ${nivel} `
}
