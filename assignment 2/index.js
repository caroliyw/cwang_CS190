function playScale() {

}

function start() {
	// hides the start button after the tone starts playing and shows the stop button
	document.getElementById("start").classList.add("hidden");
	document.getElementById("stop").classList.remove("hidden");
}


function stop() {
	// hides the stop button and displays the start button 
	document.getElementById("start").classList.remove("hidden");
	document.getElementById("stop").classList.add("hidden");
}