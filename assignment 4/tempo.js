
inlets = 1; // connect to toggle
outlets = 1; // only outputting a number

function bang() {
	var rand_tempo = 60 + Math.floor(Math.random() * 61); 
	outlet(0, rand_tempo); 
}