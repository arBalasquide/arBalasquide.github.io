var message =  "Hello, stranger. Welcome to the unknown.";

var hold = "";
var count = 0;
var arrayMessage = message.split(''); 

function typeMessage() {

	var temp = arrayMessage[count];
	var res = hold.concat(temp);
	hold = res;
	
	document.getElementById('message').innerHTML = res;		
	
	count++;
	
	if(count < arrayMessage.length)setTimeout(typeMessage, 150);
}

window.onload(typeMessage());	
