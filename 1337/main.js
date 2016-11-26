var messages =  ["Hello, stranger. Welcome to the unknown, where you will find nothing.", "What do you want me to do?", "Hmm, it might be possible"];

var x = 0;

var hold = "";
var mCount = 0;
var fCount = 0;

var c = "C:/"

function typeMessage() {

	for(k = 0; k < messages.length - 1; k++){
	
		message = messages[fCount];
		arrayMessage = message.split('');
		var temp = arrayMessage[mCount];
		var res = hold.concat(temp);
		hold = res;
			
		var messageEl = $("<div/>").addClass("message");
		var contentEl = $("<span/>").text("C:/" + res);
		messageEl.append(contentEl);
		$('#messages').append(messageEl);
			
		//document.getElementById('message').innerHTML = c.concat(res);		
			
		mCount++;
			
		if(mCount < arrayMessage.length)setTimeout(typeMessage, 100);
		
	}
	
	if(fCount < messages.length){
		
		fCount++;
		setTimeout(typeMessage, 100);	
	
}

setTimeout(typeMessage, 100);	
