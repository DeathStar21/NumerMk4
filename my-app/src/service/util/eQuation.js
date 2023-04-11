/* https://www.transum.org/software/SW/eQuations/ */
var Letter = "x";
var var1 = 0;
var var2 = 0;
var var4 = 0;
var ans = 0;
var Lastans = 0;
var Q = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  // Keep a count of how many questions of each type are asked
var Question = "Loading...";
var LetterArray = ["o","x","y","z","a","b","c","d","m","n","w"];
let operator = ["", "+", "-", "*", "/"];


export function AskQuestion(){
			
	let temp = Math.floor(Math.random()*9.5+1);//Select a letter for the equation
	Letter = LetterArray[temp];
	ShakeDice();
	
	Type2();
	Question = Question.replace('+-','-');
	Question = Question.replace('--','+');
	let idxOperator = Math.floor(Math.random()*4+1);
	Question = Question.replace("=", operator[idxOperator]).replace(" ","");
	return Question;

	/*$('#Quickulation').html('<p id=\"Qp\">' + Question + '</p>').delay(10).fadeIn(10,function(){
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,"Quickulation"]);
		if(Question.length > 24){$('#Qp').css('font-size','40px');}else{$('#Qp').css({'font-size':'50px'});}
	});*/
}

function ShakeDice() {
	Q[2]++; // Keep a count of how many questions of each type are asked
	//console.log(Q[1],Q[2],Q[3],Q[4],Q[5],Q[6]);
	ans = RandomNumber();
	if(Lastans===ans){ans++;}
	Lastans = ans;
	var1 = RandomNumber();
	var2 = RandomNumber();
	let temp = Math.floor(Math.random()*2.99);
	if(temp===1){var2 = 0-var2;}
	
	var4 = RandomNumber();
	temp = Math.floor(Math.random()*1.99);
	if(temp===1){var4 = 0-var4;}
	
}

function Type2() {
	var2 = Math.abs(var2);
	var4 = Math.abs(var4);
	var EquationPattern = rn(1,6);
	if(Q[2] < 11){EquationPattern = 6;}
	if(Q[2] < 10){EquationPattern = 5;}
	if(Q[2] < 9){EquationPattern = 4;}
	if(Q[2] < 7){EquationPattern = 3;}
	if(Q[2] < 5){EquationPattern = 2;}
	if(Q[2] < 4){EquationPattern = 1;}
	switch(EquationPattern) {
		case 1: // 3x + 2 = 5
		Question = var1 + Letter + '+' + var2 + '=' + (var1*ans+var2);
		break;
		case 2: // 3x - 2 = 5
		Question = var1 + Letter + '-' + 3 + '=' + (var1*ans-3);
		break;		
		case 3: // 2 + 3x = 5
		Question = var2 + '+' + var1 + Letter + '=' + (var1*ans+var2);
		break;
		case 4:// 2 - 3x = 5
		var2 = Math.abs(var2);
		Question = (var1*ans+var2)+ '-' + var1 + Letter  + '=' + var2;
		break;
		case 5:// 5 = 3x + 2
		var2 = Math.abs(var2);
		Question = (var1*ans+var2) + ' = ' + var1 + Letter + ' + ' + var2 ;
		break;
		case 6:// 5 = 2 - 3x 
		var2 = Math.abs(var2);
		Question = var2   + '=' + (var1*ans+var2)+ '-' + var1 + Letter;
		break;
	}


}

function RandomNumber() {
	var max = 0;
	var Type = 2;
	max = rn(2,Q[Type]+3);
	return rn(2,max);
}

function rn(Lowest,Highest) {
	return(Math.floor(Math.random()* (Highest-Lowest+1))+Lowest);
}


