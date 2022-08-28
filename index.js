// varables
var format = "mobile"
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
	// mobile format view
	if (format == "PC") {
		// title rectangle
		let x = canvas_width / 20;
		let y = canvas_height / 20;
		let w = canvas_width - (canvas_width / 20) * 3;
		let h = canvas_height / 8;
		canvas_rect([x, y, w, h], "rgb(100, 100, 100)")
		// triangle part of title background
		ctx.beginPath();
		ctx.moveTo(x + w, y);
		ctx.lineTo(x + w + (canvas_width / 20), y);
		ctx.lineTo(x + w, y + h);
		ctx.lineTo(x + w - 1, y);
		ctx.closePath();
		ctx.fill();
		// draw title
		x = canvas_width / 18;
		y = canvas_height / 8;
		canvas_text("TriFlash", [x, y], canvas_height / 12, "white", "Poppins", "left");
		// draw subtitle
		y = canvas_height / 6.5;
		canvas_text(`Online Edition - PC webpage view`, [x, y], canvas_height / 40, "white", "Poppins", "left");
		// credit
		x = canvas_width / 2
		y = canvas_height - (canvas_height / 70)
		canvas_text("Code & Program by: Mynameisevanbro", [x, y], canvas_height / 50, "white", "Poppins");
	}
	if (format == "mobile") {
		// title rectangle
		let h = canvas_height / 5
		canvas_rect([0, 0, canvas_width, h], "rgb(100, 100, 100)")
		// draw title
		let x = canvas_width / 2
		let y = canvas_height / 8
		canvas_text("TriFlash", [x, y], canvas_height / 10, "white", "Poppins")
		// draw subtitle
		y = canvas_height / 6
		canvas_text(`Online Edition - Mobile webpage view`, [x, y], canvas_height / 60, "white", "Poppins")
		// credit
		y = canvas_height - (canvas_height / 70)
		canvas_text("Code & Program by: Mynameisevanbro", [x, y], canvas_height / 50, "white", "Poppins")
	}
	
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
	// set platform format
	if (canvas_width > 960) {
		format = "PC"
	} else {
		format = "mobile"
	}
	// apply canvas dimensions
	canvas.width = canvas_width
	canvas.height = canvas_height
	// render title page
	page_title()
}


window.addEventListener('load', ()=>reset())
window.addEventListener('resize', ()=>reset())
