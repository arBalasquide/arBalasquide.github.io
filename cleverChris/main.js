$("#text-input").keyup(function(event){ // Accepts Enter as a "click"

    if(event.keyCode == 13){
	
        $("#christify").click();
    }
});

var chrisMemes = ["Hey, thats pretty good!", "I have crippling depression.", "I wish I was dead.", "Okay.", "I'm so lonely."]
	
document.getElementById('christify').onclick = function() {
	
	var input = $('#text-input').val();
	
	var finalText = chrisMemes[Math.floor(Math.random() * chrisMemes.length)]; // Gets random array value
	
	if(!input || /^\s*$/.test(input))finalText = "What? Say something you autist."; 
	
	document.getElementById('output').innerHTML = finalText;

};



