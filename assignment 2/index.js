// TODO: GIVE THE OPTION TO PLAY A SOUND OR AN AUDIO FILE
// LOOK AT TYPE MY NAME EXAMPLE ONLINE

var playsound = false; 
const soundLength = 1000; 	// tone should hold for 1 second
const soundBreak = 500; 	// wait half a second between each tone
var myAudioContext = new (window.AudioContext || window.webkitAudioContext)();	// sets up audio context
var myOscillator; 	
var myGain; 
var interval; 

setUp(); 

function setUp() {
	// used to set up oscillator and gain
	// needs to be its own function so that I can start and stop
	myOscillator = myAudioContext.createOscillator(); 	
	myGain = myAudioContext.createGain(); 

	myGain.connect(myAudioContext.destination);
	myGain.gain.setValueAtTime(0, myAudioContext.currentTime);
	myOscillator.connect(myGain);
}


function playScale() {

	let delay = 500; 

	// going up the scale
	for(let i = 1; i < 9; i++){
		setTimeout(playTone, delay, i); // calls play tone after the specified period and passes through the index of the note of the scale
		delay += soundLength;
		delay += soundBreak; 
	}

	// going down the scale
	for(let i = 7; i > 0; i--) {
		setTimeout(playTone, delay, i); // calls play tone after the specified period and passes through the index of the note of the scale
		delay += soundLength;
		delay += soundBreak; 
	}
}

function playTone(i) {
	// plays the tone corresponding to the index in the map 
	myOscillator.frequency.value = frequencyMap[i]; 
	myGain.gain.setTargetAtTime(0.5,myAudioContext.currentTime + 0.05,0.025);
	setTimeout(stopTone, soundLength); 
}

function stopTone() {
	// makes the volume of the tone 0
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

	// while playsound is true, call playScale
	interval = setInterval(playScale, 23500); // it takes a scale 23000 ms to play; 1 second pause between scales 
	playScale(); 
}


function stop() {
	// hides the stop button and displays the start button 
	// restarts the audio context
	document.getElementById("start").classList.remove("hidden");
	document.getElementById("stop").classList.add("hidden");
	clearInterval(interval); 
	myOscillator.stop(myAudioContext.currentTime);
	// creates a new audio context
	setUp();  
}


// TYPING MY NAME CODE
const thename = document.getElementById("myname");
thename.addEventListener("input", keystroke);

const soundFiles = [];
soundFiles[1] = new Audio("audios/glass_breaking.wav");
soundFiles[2] = new Audio("audios/pygmy_sound.wav"); 
soundFiles[3] = new Audio("audios/splash.wav"); 
soundFiles[4] = new Audio("audios/tweet_twoo.wav"); 
soundFiles[5] = new Audio(); 
soundFiles[6] = new Audio(); 
soundFiles[7] = new Audio();
soundFiles[8] = new Audio(); 


for(let i = 1; i <= 4; i++) {
	// set volume
	soundFiles[i].volume = 0.4;
}

const namedict = {
	// uppercase
	C: 1,
	A: 2,
	R: 3,
	O: 4,
	L: 5,
	I: 6, 
	N: 7,
	E: 8,

	// lowercase
	c: 1,
	a: 2,
	r: 3,
	o: 4,
	l: 5,
	i: 6, 
	n: 7,
	e: 8,
	
};

function keystroke(key) {
	let k = key.data;
	if (namedict[k]) {
		soundFiles[namedict[k]].play();

	}
}