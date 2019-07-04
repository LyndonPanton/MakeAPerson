"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function toggle(chevron) {
		
	}

	let chevron = document.getElementById("chevron");
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	chevron.addEventListener("keydown", function(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			toggle(this);
		}
	});
};