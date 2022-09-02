// varables
var format = "mobile"
var canvas_width = 50
var canvas_height = 50
var page = "title"


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


function hide_all() {
	// hide elements
	document.getElementById("title_start").style.display = "none";
	document.getElementById("title_setting").style.display = "none";
	document.getElementById("title_credit").style.display = "none";
	document.getElementById("title_select_back").style.display = "none";
	document.getElementById("title_select_set1").style.display = "none";

}


function button_back() {
	// go back a page
	if (page == "title_select") {
		page = "title"
	}
	// update
	reset()
}

// pages
function page_title() {
	// define canvas
	const canvas = document.getElementById("title_graphic");
	const ctx = canvas.getContext("2d");
	// show elements
	document.getElementById("title_start").style.display = "initial";
	document.getElementById("title_setting").style.display = "initial";
	document.getElementById("title_credit").style.display = "initial";
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
		button = document.getElementById("title_setting");
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
		button = document.getElementById("title_setting");
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


function page_title_select() {
	// define canvas
	const canvas = document.getElementById("title_graphic");
	const ctx = canvas.getContext("2d");
	// show elements
	document.getElementById("title_select_back").style.display = "initial";
	document.getElementById("title_select_set1").style.display = "initial";
	// mobile format view
	if (format == "PC") {
		// apply canvas dimensions
		let h = canvas_height / 8
		canvas.width = canvas_width;
		canvas.height = h;
		// position
		canvas.style.marginLeft = "0px";
		canvas.style.marginTop = "0px";
		// render title view
		canvas_rect([0, 0, canvas_width, canvas_height], "rgb(100, 100, 100)");
		// draw title
		let x = canvas_width / 10;
		let y = canvas_height / 14;
		canvas_text("Select set", [x, y], canvas_height / 16, "white", "Poppins", "left");
		// draw subtitle
		y = canvas_height / 9;
		canvas_text(`You can choose multiple`, [x, y], canvas_height / 40, "white", "Poppins", "left");
		// back button
		let button = document.getElementById("title_select_back");
		button.style.width = `${(h / 4) * 3}px`;
		button.style.height = `${(h / 4) * 3}px`;
		button.style.fontSize = `${h / 2}px`;
		button.style.marginLeft = `${h / 8}px`;
		button.style.marginTop = `${h / 8}px`;
		button.style.borderRadius = `${h / 8}px`;
		// set buttons
		button = document.getElementById("title_select_set1");
		button.style.width = `${canvas_width / 3}px`;
		button.style.height = `${canvas_height / 5}px`;
		button.style.fontSize = `${canvas_height / 25}px`;
		button.style.marginLeft = `${h / 8}px`;
		button.style.marginTop = `${canvas_height / 6}px`;

	}
	if (format == "mobile") {
		// apply canvas dimensions
		let h = canvas_height / 8
		canvas.width = canvas_width;
		canvas.height = h;
		// position
		canvas.style.marginLeft = "0px";
		canvas.style.marginTop = "0px";
		// render title view
		canvas_rect([0, 0, canvas_width, canvas_height], "rgb(100, 100, 100)");
		// draw title
		let x = canvas_width / 3.5;
		let y = canvas_height / 14;
		canvas_text("Select set", [x, y], canvas_height / 16, "white", "Poppins", "left");
		// draw subtitle
		y = canvas_height / 9;
		canvas_text(`You can choose multiple`, [x, y], canvas_height / 40, "white", "Poppins", "left");
		// back button
		let button = document.getElementById("title_select_back");
		button.style.width = `${(h / 4) * 3}px`;
		button.style.height = `${(h / 4) * 3}px`;
		button.style.fontSize = `${h / 2}px`;
		button.style.marginLeft = `${h / 8}px`;
		button.style.marginTop = `${h / 8}px`;
		button.style.borderRadius = `${h / 8}px`;
		// set buttons
		button = document.getElementById("title_select_set1");
		button.style.width = `${canvas_width - (canvas_width / 10)}px`;
		button.style.height = `${canvas_height / 5}px`;
		button.style.fontSize = `${canvas_height / 25}px`;
		button.style.marginLeft = `${canvas_width / 20}px`;
		button.style.marginTop = `${canvas_height / 6}px`;
	}
	
}



// start up
function reset() {
	console.log("Flashcards program by Mynameisevanbro!");
	// set title
	document.getElementById("title").innerHTML = "TriFlash Online Edition";
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
	// render current page
	hide_all()
	if (page == "title") {
		page_title()
	} else if (page == "title_select") {
		page_title_select()
	}
}


window.addEventListener('load', ()=>reset())
window.addEventListener('resize', ()=>reset())
