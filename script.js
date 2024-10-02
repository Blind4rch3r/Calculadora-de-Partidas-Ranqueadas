// Desafio Calculadora de Partidas Ranqueadas
const prompt = require("prompt-sync")({sigint: true})


function rankCalculator(amountWins, amountLoss){
	let rankBalance = amountWins - amountLoss
	return rankBalance
}


function rankStatusCalculator(rankBalance){
	let resultStatus = ""

	if (rankBalance <= 10) {		// Se vitórias for menor do que 10 = Ferro
    		resultStatus = "Ferro"
	} else if(rankBalance <= 20){		// Se vitórias for entre 11 e 20 = Bronze
    		resultStatus = "Bronze"
	} else if(rankBalance <= 50){		// Se vitórias for entre 21 e 50 = Prata
    		resultStatus = "Prata"
	} else if(rankBalance <= 80){		// Se vitórias for entre 51 e 80 = Ouro
    		resultStatus = "Ouro"              
	} else if(rankBalance <= 90){		// Se vitórias for entre 81 e 90 = Diamante
    		resultStatus = "Diamante"
	} else if(rankBalance <= 100){		// Se vitórias for entre 91 e 100 = Lendário
    		resultStatus = "Lendário"
	} else {				// Se vitórias for maior ou igual a 101 = Imortal
    		resultStatus = "Imortal"
	}

	return resultStatus
}


function main(){
	let amountWins = parseInt(prompt("What are your number of wins? "))
	let amountLoss = parseInt(prompt("What is your number of losses? "))
	
	winningBalance = rankCalculator(amountWins, amountLoss)
	resultStatus = rankStatusCalculator(winningBalance)
	
	console.log(`O Herói tem de saldo de ${winningBalance} e está no nível de ${resultStatus}`)	
}

main()







