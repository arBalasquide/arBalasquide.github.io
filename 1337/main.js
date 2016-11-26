var messages =  ["Hello, stranger. Welcome to the unknown, where you will find nothing.", "What do you want me to do?", "Hmm, it might be possible"];

var hold = "";
var mCount = 0;
var fCount = 0;

function typeMessage() {

	for(k = 0; k < messages.length; k++){
	
		message = messages[fCount];
		arrayMessage = message.split('');
		var temp = arrayMessage[k];
		var res = hold + temp;
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
