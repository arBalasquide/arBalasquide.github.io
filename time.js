function start() {

    var t = new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();
	
	
	
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
	
    setTimeout(start, 500);
}

function check() {

	// the time shows up as 8:0:0 instead of 8:00:00
	//this function will fix it

}

window.onload(start());