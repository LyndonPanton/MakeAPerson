"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	let user;

	function Person(full) {
		name = full;

		this.getFirstName = function() {
			return name.split(" ")[0];
		}

		this.getFullName = function() {
			return name;
		}

		this.getLastName = function() {
			return name.split(" ")[1];
		}

		this.setFirstName = function(newFirst) {
			name = newFirst + name.split(" ")[1];
		}

		this.setFullName = function(newFull) {
			name = newFull;
		}

		this.setLastName = function(newLast) {
			name = name.split(" ")[0] + newLast;
		}
	}

	function makePerson(first, last) {
		if (first === "" || last === "") {
			// log("Name must not be empty")
			return null;
		} else if (/^[a-zA-Z]/.test(first) || /^[a-zA-Z]/.test(last)) {
			// log("Name must only contain alphabetical characters")
			return null;
		} else {
			// log("Person successfully made")
			// Disable form
			return Person(first + last);
		}
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
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

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		user = makePerson(this.children[0].value, this.children[1].value);
	});

	// freecodecamp version
	// var Person = function(firstAndLast) {
	// 	// Complete the method below and implement the others similarly
	// 	let name = firstAndLast;

	// 	this.getFirstName = function() {
	//     	return name.split(" ")[0];
	// 	};

	// 	this.getFullName = function() {
	//     	return name;
	// 	};

	// 	this.getLastName = function() {
	//     	return name.split(" ")[1];
	// 	};

	// 	this.setFirstName = function(first) {
	//     	name = first + " " + name.split(" ")[1];
	// 	};

	// 	this.setFullName = function(firstAndLast) {
	//     	name = firstAndLast;
	// 	};

	// 	this.setLastName = function(last) {
	//     	name = name.split(" ")[0] + " " + last;
	// 	};
	// };

	// var bob = new Person('Bob Ross');
	// console.log(bob.getFullName());
};