var container = document.querySelector(".container");
var flexbox = document.querySelector("h1");

container.addEventListener("mousemove", showShadow);

function showShadow(event) {
	var xVal = event.offsetX;
	var yVal = event.offsetY;
	var size = 50;
	if (event.target.matches("h1")) xVal += event.target.offsetLeft;
	if (event.target.matches("h1")) yVal += event.target.offsetTop;
	var sX = xVal / container.offsetWidth * size - size / 2;
	var sY = yVal / container.offsetHeight * size - size / 2;
	var str = sX + "px " + sY + "px 0 #24248f";
	flexbox.style.textShadow = str;
}