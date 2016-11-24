var message =  "Hello, stranger. Welcome to the unknown, where you will find nothing.";

var hold = "";
var count = 0;
var arrayMessage = message.split(''); 

var c = "C:/"

function typeMessage() {

	var temp = arrayMessage[count];
	var res = hold.concat(temp);
	hold = res;
	
	document.getElementById('message').innerHTML = c.concat(res);		
	
	count++;
	
	if(count < arrayMessage.length)setTimeout(typeMessage, 100);
}

window.onload(typeMessage());	
