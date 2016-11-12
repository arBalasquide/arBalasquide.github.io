function playVoice1() {

	var voice1 = new Audio("../sound/voice1.mp3");
	voice1.play();

}

function playVoice2() {

	var voice2 = new Audio("../sound/voice2.wav");
	voice2.play();

}

$("#girl").on("click", playVoice1);
$("#adrian").on("click", playVoice2);