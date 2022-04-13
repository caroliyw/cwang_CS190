
var playsound = false; 
const soundLength = 1000; 	// tone should hold for 1 second
const soundBreak = 333; 	// wait a third of a second between each tone
var myAudioContext = new (window.AudioContext || window.webkitAudioContext)();
var myOscillator = myAudioContext.createOscillator(); 
var myGain = myAudioContext.createGain(); 

myGain.connect(myAudioContext.destination);
myGain.gain.setValueAtTime(0, myAudioContext.currentTime);
myOscillator.connect(myGain);





function playScale() {
	playsound = true; 
	// while playsound is true, keep playing the scale repeatedly
	let delay = 500; 
	for(let i = 1; i < 9; i++){
		console.log(i);
		setTimeout(playTone, delay, i); // calls play tone after the specified period and passes through the index of the note of the scale
		delay += soundLength;
		delay += soundBreak; 
	}

}

function playTone(i) {
	myOscillator.frequency.value = frequencyMap[i]; 
	myGain.gain.setTargetAtTime(0.5,myAudioContext.currentTime + 0.05,0.025);
	setTimeout(stopTone, soundLength); 
}

function stopTone() {
	myGain.gain.setTargetAtTime(0,myAudioContext.currentTime + 0.05,0.025);


}

const frequencyMap = {
	1: 440,		// A4
	2: 493.88,	// B
	3: 554.37,	// C#
	4: 587.33,	// D 
	5: 659.25, 	// E
	6: 739.99, 	// F#
	7: 830.61, 	// G#
	8: 880, 	// A5
}

function start() {
	// hides the start button after the tone starts playing and shows the stop button
	myOscillator.start(0);
	document.getElementById("start").classList.add("hidden");
	document.getElementById("stop").classList.remove("hidden");
	playsound = true; 
	// while playsound is true, call playScale

	
}


function stop() {
	// hides the stop button and displays the start button 

	document.getElementById("start").classList.remove("hidden");
	document.getElementById("stop").classList.add("hidden");
	playsound = false; 
}