

// function getDiceGame(){
// 	let player1 = 300;
// 	let player2 = 300;
// 	let sumOfDiceRoll = dice1 + dice2 + dice3 + dice4 + dice5 + dice 6;
// 	let iAttack = attack;
// 	let heavyArmors = attack * 0.5;
// 	let mediumAmors = attack * 1;
// 	let lightArmors = attack * 2;
// 	let heavyAttack = attack * 2;
// 	let normalAttack = attack * 1;
// 	let lightAttack = attack * 0.5;
// 	let lessAccuracy = attack * 0.5;
// 	let normalAccuracy = attack * 1;
// 	let ontargetAccuracy = attack * 2;
// // 	let x = dice roll number;


function displayRules(){
	alert("RULES OF THE GAME:\n\nPlayers have to roll a dice to determine who attacks first.\nPlayers have to roll a dice; the sum of the dice rolls will determine the base attack amount based off of an algorithm.\nPlayers have to pick out his or her armor set at the beginning of the game, which will mitigate damage based off his or her choice.\nPlayers have the ability to choose his or her attack style, that will both modify his or her attack value and accuracy.\nPlayers have to take turns attacking each other until one player runs out of health.\nPlayer with the remaining health will be the winner.");
}
displayRules();
 

// function chooseOptions(){
// 	let numberOfPlayers=choosePlayers();
// }
// chooseOptions();

choosePlayers();

function choosePlayers(){
		let whichPlayers =prompt("Pick Player 1 or Player 2");
		if(whichPlayers === "Player 1"){
			console.log("Player 1");
		}
		else if(whichPlayers === ""){
			console.log("That's not an option!");
		}
		else {
			(whichPlayers === "Player 2");
			console.log("Player 2");
		}

}
chooseArmor()

function chooseArmor(){
		let whichArmor =prompt("Which type of armor would you like to play with:\n\nheavy armor\nmedium armor\nlight armor");
		if(whichArmor === "heavy armor"){
			console.log("heavy armor");
		}
		else if(whichArmor === "medium armor"){
			console.log("medium armor");
		}
		else if(whichArmor === ""){
			console.log("That's not an option!");
		}
		else {
			(whichArmor === "light armor");
			console.log("light armor");
		}
}

chooseAttackStyle()

function chooseAttackStyle(){
		let whichAttackStyle =prompt("Which type of attack style would you like to play with:\n\nlight attack\nnormal attack\nheavy attack");
		if(whichAttackStyle === "light attack"){
			console.log("light attack");
		}
		else if(whichAttackStyle === "normal attack"){
			console.log("normal attack");
		}
		else if(whichAttackStyle === ""){
			console.log("That's not an option!");
		}
		else {
			(whichAttackStyle === "heavy attack");
			console.log("heavy attack");
		}
}



function roll(n){
 let randomNumber = Math.floor(Math.random()*n) +1; 
 return randomNumber;
}

function rollDice(){
 	let diceResult1 = roll(4);
	let diceResult2 = roll(6);
	let diceResult3 = roll(8);
	let diceResult4 = roll(10);
	let diceResult5 = roll(12);
	let diceResult6 = roll(20);
	return (diceResult1 + diceResult2 + diceResult3 + diceResult4 + diceResult5 + diceResult6);
}

function determineStartingPlayer (){
	let player1RollDice = rollDice();
	let player2RollDice = rollDice();
	let isPlayerOneFirst;

	if (player1RollDice > player2RollDice){
		isPlayerOneFirst = true;
	}
	else if (player1RollDice == player2RollDice){
		isPlayerOneFirst = determineStartingPlayer ();
	}
	else {
		isPlayerOneFirst = false;
	}
	return isPlayerOneFirst;
}

console.log(determineStartingPlayer());


function getArmorAttack(){
	let attack = determineAttack();
	let isPlayerOneFirst = determineStartingPlayer();
	let heavyArmor = "heavy armor";
	let mediumAmor = "medium armor";
	let lightArmor = "light armor";
		if(isPlayerOneFirst && heavyArmor){
			return (attack * 0.5);
		}
		else if(isPlayerOneFirst && mediumArmor){
			return  (attack * 1);
		}
		else {
			(isPlayerOneFirst && lightArmor);
			return  (attack * 2);
		}
	}
getArmorAttack()

function getAttackStyle(){
	let attack = determineAttack();
	let isPlayerOneFirst = determineStartingPlayer();
	let lightAttack = "light attack";
	let normalAttack = "normal attack";
	let heavyAttack = "heavy attack";
		if(isPlayerOneFirst && lightAttack){
			return (attack * 0.5);
		}
		else if(isPlayerOneFirst && normalAttack){
			return  (attack * 1);
		}
		else {
			(isPlayerOneFirst && heavyAttack);
			return  (attack * 2);
		}
	}
getAttackStyle()

function determineAttack(){
		let diceResult1 = roll(4);
		let diceResult2 = roll(6);
		let diceResult3 = roll(8);
		let diceResult4 = roll(10);
		let diceResult5 = roll(12);
		let diceResult6 = roll(20);
		let sumOfRoll = rollDice();
		if (diceResult1 == diceResult2 && diceResult1 == diceResult3 && diceResult1 == diceResult4 && diceResult1 == diceResult5 && diceResult1 == diceResult6){
			return 50;
		}
		else if (diceResult2 == diceResult3 && diceResult2 == diceResult4 && diceResult2 == diceResult5 && diceResult2 == diceResult6){
			return 40;
		} 
		else if (diceResult3 == diceResult4 && diceResult3 == diceResult5 && diceResult3 == diceResult6 ){
			return 30;
		}
		else if (diceResult4 == diceResult5 && diceResult4 == diceResult6){
			return 20;
		}
		else if (diceResult5 == diceResult6){
			return 10;
		}
		else if (diceResult1 == diceResult2 || diceResult1 == diceResult3 || diceResult1 == diceResult4 || diceResult1 == diceResult5 || diceResult1 == diceResult6){
			return 2;
		} 
		else if (diceResult2 == diceResult3|| diceResult2 == diceResult4 || diceResult2 == diceResult5 || diceResult2 == diceResult6){
			return 4;
		} 
		else if (diceResult3 == diceResult4 || diceResult3 == diceResult5 || diceResult3 == diceResult6){
			return 6;
		} 
		else if (diceResult4 == diceResult5 || diceResult4 == diceResult6){
			return 8;
		} 
		else if (diceResult5 == diceResult6){
			return 10;
		}
				else if (sumOfRoll <= 15){
			return 5;
		}
		else if (sumOfRoll >15 && sumOfRoll <=30){
			return 10;
		} 
		else if (sumOfRoll >30 && sumOfRoll <=45){
			return 15;
		}
		else if (sumOfRoll > 45){
			return 20;
		}
		else {
			return 0;
			Alart ("You missed");
		}
}

// console.log(determineAttack());


function playersHealth (){
	let player1Health = 300;
	let player2Health = 300;
	let player1Name= "player 1";
	let player2Name= "player 2";

	let playerHealthArray = [];
	let playerNameArray = [];
	let isPlayerOneFirst = determineStartingPlayer();
	let attack = determineAttack();
	let armorAttack = getArmorAttack();
	let attackStyle = getAttackStyle();

	if (isPlayerOneFirst) {
		playerHealthArray.push(player2Health);
		playerHealthArray.push(player1Health);
		playerNameArray.push(player1Name);
		playerNameArray.push(player2Name);
	}
	else {
		playerHealthArray.push(player1Health);
		playerHealthArray.push(player2Health);
		playerNameArray.push(player2Name);
		playerNameArray.push(player1Name);
	}

	while(playerHealthArray[0] > 0 && playerHealthArray[1] > 0){
		for (var i = 0; i < playerHealthArray.length; i++) {
			let attack = determineAttack();
			playerHealthArray[i] -= (attack + armorAttack + attackStyle);
			console.log(playerNameArray[i] + " attacks for " + attack);
		}
	}	

	if(playerHealthArray[0]<=0 && playerHealthArray[1]<=0){
		alert("It's a tie!");
	}
	else {
		if(playerHealthArray[0] > playerHealthArray[1]){
		// alert(`Game Over! ${playerNameArray[i]} wins!`);
			alert("Game Over! " + playerNameArray[0]+ " wins!");
		}
		else{
			alert("Game Over! " + playerNameArray[1]+ " wins!");
		}
	} 
}


playersHealth();