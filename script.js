function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	
		document.getElementById("output-value").innerText=num;
		
}

var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=getOutput().toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1); 
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){ //when we enter operator at the end
					history= history.substr(0,history.length-1); // removing operator
				}
			}
			if(output!="" || history!=""){
				
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					
					var itemName = history
					var list = document.getElementById('hist');
					var li = document.createElement('li');
					li.innerText = `${itemName} = ${result}`;
					list.appendChild(li);
					printHistory("");
				}
				else{
					history=history+this.id; //operator added to the hitory
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=getOutput();
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}