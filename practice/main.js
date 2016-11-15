var words; //working on creating a txt list and being able to extract the info from it

$.get("./words.txt", function(data){

	words = data.split(',');
	
});

//function getResult() {

	

//}

//function start() {

//	var question = ;
	
//	document.getElementById('result').innerHTML = question;

//}


document.getElementById('question').innerHTML = words[0];
//window.onload(start());


// jisho.org/search/word
// lol well I'll be able to finish this one day
