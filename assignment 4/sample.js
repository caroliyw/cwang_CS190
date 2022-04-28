inlets = 1;
outlets = 2;

var num_array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function bang() {
	var rand = Math.ceil(Math.random()); // console log equivalent
	outlet(0, rand); 
}