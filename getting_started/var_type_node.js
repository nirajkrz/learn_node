// create random Die numbers  to simulate a roll of dice
var firstDie = getDieRoll(6);

function getDieRoll(dieSize){
	console.log("rolling a die");
  	return Math.ceil(dieSize * Math.random());
}

var showResult = function (){

	console.log(firstDie);
	var secondDie = getDieRoll(6);
	console.log(secondDie);
	console.log( firstDie + secondDie );
}

showResult();
