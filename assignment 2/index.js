var playsound = false; 
var myAudioContext = new (window.AudioContext || window.webkitAudioContext)();

function playScale() {
	playsound = true; 


}

const frequencyMap = {
	1: 440,		// A4
	2: 493.88,	// B
	3: 523.25,	// C
	4: 587.33,	// D 
	5: 659.25, 	// E
	6: 698.46, 	// F
	7: 783.99, 	// G
	8: 880, 	// A5
}

function start() {
	// hides the start button after the tone starts playing and shows the stop button
	document.getElementById("start").classList.add("hidden");
	document.getElementById("stop").classList.remove("hidden");
	playScale();
}


function stop() {
	// hides the stop button and displays the start button 
	document.getElementById("start").classList.remove("hidden");
	document.getElementById("stop").classList.add("hidden");
	playsound = false; 
}