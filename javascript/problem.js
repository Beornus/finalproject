document.onload = function () {
	
}

function scroll () {
	let navW = document.getElementById("problemPageNavWrapper");
	let navP = document.getElementById("problemPageNav1");
	let navPa = document.getElementById("nav1a");
	let navS = document.getElementById("problemPageNav2");
	let navSa = document.getElementById("nav2a");
	let problemDiv = document.getElementById("problem");
	let solutionDiv = document.getElementById("solution");

	/*
	console.log(
		"window pageYOffset: "+window.pageYOffset
		+"\n"
		+"\nbody scrollHeight: "+body.scrollHeight
		+"\nbody scrollTop: "+body.scrollTop
		+"\nbody clientHeight: "+body.clientHeight
		+"\nbody offsetHeight: "+body.offsetHeight
		+"\n"
		+"\ndiv scrollHeight: "+div.scrollHeight
		+"\ndiv scrollTop: "+div.scrollTop
		+"\ndiv clientHeight: "+div.clientHeight
		+"\ndiv offsetHeight: "+div.offsetHeight
		+"\n"
		+"\nnav scrollHeight: "+nav.scrollHeight
		+"\nnav scrollTop: "+nav.scrollTop
		+"\nnav clientHeight: "+nav.clientHeight
		+"\nnav offsetHeight: "+nav.offsetHeight
		);
	*/

	if (window.pageYOffset > problemDiv.scrollHeight) {
		navP.style.backgroundColor = "white";
		navPa.style.color = "black";

		navS.style.backgroundColor = "#8EC372";
		navSa.style.color = "white";
	} else {
		navP.style.backgroundColor = "#8EC372";
		navPa.style.color = "white";

		navS.style.backgroundColor = "white";
		navSa.style.color = "black";
	}
}