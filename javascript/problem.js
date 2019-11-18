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

	let navbar = document.getElementById("navbar");
	let problemPageContent = document.getElementById("problemPageContent");
	let problemPageDocumentContent = document.getElementById("problemPageDocumentContent");

	if (!(window.pageYOffset > (problemDiv.scrollHeight+98) )) {
		//problem
		navP.style.backgroundColor = "#8EC372";
		navPa.style.color = "white";

		navS.style.backgroundColor = "white";
		navSa.style.color = "rgb(180,180,180)";

	} else {
		// solution
		navP.style.backgroundColor = "white";
		navPa.style.color = "rgb(180,180,180)";

		navS.style.backgroundColor = "#8EC372";
		navSa.style.color = "white";
	}
}