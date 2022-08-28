// varables
var format = "mobile"
var canvas_width = 50
var canvas_height = 50


// GUI
function canvas_text(text, pos, size, color, font, alignment="center") {
	// define canvas
	const canvas = document.getElementById("title_graphic");
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
	const canvas = document.getElementById("title_graphic");
	const ctx = canvas.getContext("2d");
	// draw title
	ctx.fillStyle = color;
	ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
}


// pages
function page_title() {
	// define canvas
	const canvas = document.getElementById("title_graphic");
	const ctx = canvas.getContext("2d");
	// mobile format view
	if (format == "PC") {
		// apply canvas dimensions
		canvas.width = canvas_width - (canvas_width / 20) * 2;
		canvas.height = canvas_height / 8;
		// position
		canvas.style.marginLeft = `${canvas_width / 20}px`;
		canvas.style.marginTop = `${canvas_height / 40}px`;
		// render title view
		let w = canvas_width - (canvas_width / 20) * 3;
		let h = canvas_height / 8;
		canvas_rect([0, 0, w, h], "rgb(100, 100, 100)");
		// triangle part of title background
		ctx.beginPath();
		ctx.moveTo(w, 0);
		ctx.lineTo(w + (canvas_width / 20), 0);
		ctx.lineTo(w, h);
		ctx.lineTo(w - 1, 0);
		ctx.closePath();
		ctx.fill();
		// draw title
		let x = canvas_width / 50;
		let y = canvas_height / 14;
		canvas_text("TriFlash", [x, y], canvas_height / 12, "white", "Poppins", "left");
		// draw subtitle
		y = canvas_height / 9;
		canvas_text(`Online Edition - PC webpage view`, [x, y], canvas_height / 40, "white", "Poppins", "left");
		// title buttons
		let s = `${canvas_height / 30}px`;
		x = `${canvas_width / 20}px`
		w = `${canvas_width / 3}px`;
		h = `${canvas_height / 10}px`;
		let d = (canvas_height / 2.5) - (canvas_height / 4)
		// title start button
		let button = document.getElementById("title_start");
		button.style.width = w;
		button.style.height = h;
		button.style.marginLeft = x;
		button.style.fontSize = s;
		button.style.marginTop = `${canvas_height / 4}px`;
		// title select button
		button = document.getElementById("title_select");
		button.style.width = w;
		button.style.height = h;
		button.style.marginLeft = x;
		button.style.fontSize = s;
		button.style.marginTop = `${canvas_height / 2.5}px`;
		// title credit button
		button = document.getElementById("title_credit");
		button.style.width = w;
		button.style.height = h;
		button.style.marginLeft = x;
		button.style.fontSize = s;
		button.style.marginTop = `${(canvas_height / 2.5) + d}px`;
	}
	if (format == "mobile") {
		// apply canvas dimensions
		canvas.width = canvas_width
		canvas.height = canvas_height / 5
		// position
		canvas.style.marginLeft = "0px"
		canvas.style.marginTop = "0px"
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
		// title buttons
		let s = `${canvas_height / 30}px`;
		x = `${canvas_width / 20}px`
		w = `${canvas_width - (canvas_width / 10)}px`;
		h = `${canvas_height / 5}px`;
		let d = (canvas_height / 2) - (canvas_height / 4)
		// title start button
		let button = document.getElementById("title_start");
		button.style.width = w;
		button.style.height = h;
		button.style.marginLeft = x;
		button.style.fontSize = s;
		button.style.marginTop = `${canvas_height / 4}px`;
		// title select button
		button = document.getElementById("title_select");
		button.style.width = w;
		button.style.height = h;
		button.style.marginLeft = x;
		button.style.fontSize = s;
		button.style.marginTop = `${canvas_height / 2}px`;
		// title credit button
		button = document.getElementById("title_credit");
		button.style.width = w;
		button.style.height = h;
		button.style.marginLeft = x;
		button.style.fontSize = s;
		button.style.marginTop = `${(canvas_height / 2) + d}px`;
	}
	
}


// start up
function reset() {
	console.log("Flashcards program by Mynameisevanbro!")
	// set title
	document.getElementById("title").innerHTML = "TriFlash Online Edition"
	// define canvas
	const canvas = document.getElementById("title_graphic");
	const ctx = canvas.getContext("2d");
	// update canvas dimensions
	canvas_width = window.innerWidth - 20;
	canvas_height = window.innerHeight - 25;
	// set platform format
	if (screen.width > 960) {
		format = "PC"
	} else {
		format = "mobile"
	}
	// render title page
	page_title()
}


window.addEventListener('load', ()=>reset())
window.addEventListener('resize', ()=>reset())
