// varables
var canvas_width = 50
var canvas_height = 50


// GUI
function canvas_text(text, pos, size, color, font, alignment="center") {
	// define canvas
	const canvas = document.getElementById("gd");
	const ctx = canvas.getContext("2d");
	// draw title
	let text_size = size;
	ctx.font = `${text_size}px ${font}`;
	ctx.textAlign = alignment;
	ctx.fillStyle = color;
	ctx.fillText(text, pos[0], pos[1]);
}


function canvas_rect(rect, color) {
	// define canvas
	const canvas = document.getElementById("gd");
	const ctx = canvas.getContext("2d");
	// draw title
	ctx.fillStyle = color;
	ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
}


// pages
function page_title() {
	// define canvas
	const canvas = document.getElementById("gd");
	const ctx = canvas.getContext("2d");
	// title rectangle
	let h = canvas_height / 10
	canvas_rect([0, 0, canvas_width, h], "rgb(100, 100, 100)") 
	// draw title
	let x = canvas_width / 2
	let y = canvas_height / 20
	canvas_text("TriFlash", [x, y], canvas_height / 20, "white", "Poppins")
	// draw subtitle
	y = canvas_height / 14
	canvas_text("Online Edition", [x, y], canvas_height / 60, "white", "Poppins")
	// credit
	y = canvas_height - (canvas_height / 70)
	canvas_text("Code & Program by: Mynameisevanbro", [x, y], canvas_height / 70, "white", "Poppins")
}


// start up
function reset() {
	// set title
	document.getElementById("title").innerHTML = "TriFlash Online Edition"
	// define canvas
	const canvas = document.getElementById("gd");
	const ctx = canvas.getContext("2d");
	// update canvas dimensions
	canvas_width = window.innerWidth - 20;
	canvas_height = window.innerHeight - 25;
	// apply canvas dimensions
	canvas.width = canvas_width
	canvas.height = canvas_height
	// render title page
	page_title()
}


window.addEventListener('load', ()=>reset())
window.addEventListener('resize', ()=>reset())
