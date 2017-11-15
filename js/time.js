function start() {

    var t = new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();
	
	h = check(h);
	m = check(m);
	s = check(s);
	
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
	
    setTimeout(start, 500);
}

function check(x) { //makes it so the time looks like 9:01:01 instead of 9:1:1

	if(x < 10){
	
		x =  "0" + x;
	
	}
	
	return x;
}

window.onload(start());