var remVoice = new Audio("remVoice.mp3");

remVoice.addEventListener('ended', function() {
	this.play();
	}, false);
	
remVoice.play();