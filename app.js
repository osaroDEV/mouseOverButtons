// Views button
document.getElementById("eye").onmouseover = function () {
	mouseOverE();
};

function mouseOverE() {
	document.getElementById("eye").style.backgroundColor = "#fff";
	document.getElementById("feye").style.color = "#000";
}

document.getElementById("eye").onmouseout = function () {
	mouseOutE();
};

function mouseOutE() {
	document.getElementById("eye").style.backgroundColor = "#000";
	document.getElementById("feye").style.color = "#fff";
}

document.getElementById("heart").onmouseover = function () {
	mouseOverH();
};

// Approve button
function mouseOverH() {
	document.getElementById("heart").style.backgroundColor = "#fff";
	document.getElementById("fheart").style.color = "#000";
}

document.getElementById("heart").onmouseout = function () {
	mouseOutH();
};

function mouseOutH() {
	document.getElementById("heart").style.backgroundColor = "#000";
	document.getElementById("fheart").style.color = "#fff";
}

// Likes button
document.getElementById("spades").onmouseover = function () {
	mouseOverS();
};

function mouseOverS() {
	document.getElementById("spades").style.backgroundColor = "#fff";
	document.getElementById("fspades").style.color = "#000";
}

document.getElementById("spades").onmouseout = function () {
	mouseOutS();
};

function mouseOutS() {
	document.getElementById("spades").style.backgroundColor = "#000";
	document.getElementById("fspades").style.color = "#fff";
}
