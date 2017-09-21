window.onload = function(){
	logDiv = document.getElementByID("log");
}

let logDiv;
let log = function(){
	console.log(arguments);
	logDiv.innerHTML += arguments[0]+"<br>";
}
let socket = io.connect("html://localhost");
