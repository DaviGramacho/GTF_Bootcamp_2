let resultMatches = rankedCalculator(153, 14)

function rankedCalculator(wins, loss){
    let winLossCount = wins - loss
    return winLossCount
}

if (resultMatches < 10) {
    level = "Ferro";
} else if (resultMatches <= 20) {
    level = "Bronze";
} else if (resultMatches <= 50) {
    level = "Prata";
} else if (resultMatches <= 80) {
    level = "Ouro";
} else if (resultMatches <= 90) {
    level = "Diamante";
} else if (resultMatches <= 100) {
    level = "Lendário";
} else{
    level = "Imortal"
}

console.log(`O Herói tem de saldo de ${resultMatches} está no nível de ${level}`)