/*
function isEven(num){ 
	if (Math.abs(num) == 0){
		alert('Num is EVEN!!!');
	}
	else if (Math.abs(num) == 1){
		alert('Num is ODD!!!');
	}
	else{
		isEven(Math.abs(num) - 2);
	}
}

isEven(parseInt(prompt("Enter a number")));

var bCount = 0
var num = 0

function countBs(string){
	while(num < string.length){
		if(string.charAt(num) == 'B'){
			console.log(bCount++ + " bCount");
		}
		console.log(num++ + " num");
		countBs(string);
	}
	return(bCount);
	
}

alert(countBs("BUBUBUBUBUBUB"));

var count = 0
var num = 0

function countChar(string, c){
	while(num < string.length){
		if(string.charAt(num) == c){
			console.log(count++ + " count");
		}
		console.log(num++ + " num");
		countChar(string, c);
	}
	return(count);
} 

alert(countChar('CharlC', 'C'))
*/

function range(start, end, step){
	var rangeArray = [start];
	var i = start;
	while(rangeArray[rangeArray.length-1] + step != end){
		i += step;
		rangeArray.push(i);
	}
	return(rangeArray);
}

function sum(array){
	
	var i = 0;
	var result = 0;
	while(i < array.length){
		result += array[i];
		i++;
	}
	return(result);
	
}

alert(range(5,-2,-1))
//alert(sum(range(1,10, 2)));
