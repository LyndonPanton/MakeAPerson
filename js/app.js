"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	let user;

	function Person(full) {
		name = full;

		this.getFirstName = function() {
			log("> " + name.split(" ")[0][0].toUpperCase() + name.split(" ")[0].slice(1).toLowerCase());
			return name.split(" ")[0][0].toUpperCase() + name.split(" ")[0].slice(1).toLowerCase();
		}

		this.getFullName = function() {
			log("> " + name.split(" ")[0][0].toUpperCase() + name.split(" ")[0].slice(1).toLowerCase() + " " + name.split(" ")[1][0].toUpperCase() + name.split(" ")[1].slice(1).toLowerCase());
			return name.split(" ")[0][0].toUpperCase() + name.split(" ")[0].slice(1).toLowerCase() + " " + name.split(" ")[1][0].toUpperCase() + name.split(" ")[1].slice(1).toLowerCase();
		}

		this.getLastName = function() {
			log("> " + name.split(" ")[1][0].toUpperCase() + name.split(" ")[1].slice(1).toLowerCase());
			return name.split(" ")[1][0].toUpperCase() + name.split(" ")[1].slice(1).toLowerCase();
		}

		this.setFirstName = function(newFirst) {
			name = newFirst + " " + name.split(" ")[1];
			log("> First name is now: " + name.split(" ")[0][0].toUpperCase() + name.split(" ")[0].slice(1).toLowerCase());
		}

		this.setFullName = function(newFull) {
			name = newFull;
			log("> Full name is now: " + name.split(" ")[0][0].toUpperCase() + name.split(" ")[0].slice(1).toLowerCase() + " " + name.split(" ")[1][0].toUpperCase() + name.split(" ")[1].slice(1).toLowerCase());
		}

		this.setLastName = function(newLast) {
			name = name.split(" ")[0] + " " + newLast;
			log("> Last name is now: " + name.split(" ")[1][0].toUpperCase() + name.split(" ")[1].slice(1).toLowerCase());
		}
	}

	function disable() {
		document.getElementById("form-first").disabled = "disabled";
		document.getElementById("form-last").disabled = "disabled";
		document.getElementById("form-submit").disabled = "disabled";

		log("> Form disabled");
	}

	function log(message) {
		let element = document.createElement("p");
		element.classList.add("message");
		let text = document.createTextNode(message);

		element.appendChild(text);
		document.getElementById("console").appendChild(element);
	}

	function makePerson(first, last) {
		if (first === "" || last === "") {
			log("> Name must not be empty");
			return null;
		} else if (/[^a-zA-Z]/i.test(first) || /[^a-zA-Z]/i.test(last)) {
			log("> Name must only contain alphabetical characters");
			return null;
		} else {
			log("> Person successfully made");
			disable();

			return new Person(first + " " + last);
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

	function validateFull(name) {
		if (name === "") {
			log("> Name must not be empty");
			return false;
		} else if (name.indexOf(" ") === -1) {
			log("> Name must contain one white space");
			return false;
		} else if (name.indexOf(" ") !== name.lastIndexOf(" ")) {
			log("> Name must only contain one white space");
			return false;
		} else if (name.indexOf(" ") === 0) {
			log("> White space must not be at start of name");
			return false;
		} else if (name.indexOf(" ") === (name.length - 1)) {
			log("> White space must not be at end of name");
			return false;
		} else if (/[^a-zA-Z\s]/i.test(name)) {
			log("> Name must only contain alphabetical characters and one white space character");
			return false;
		} else {
			return true;
		}
	}

	function validateShort(name) {
		if (name === "") {
			log("> Name must not be empty");
			return false;
		} else if (/[^a-zA-Z]/i.test(name)) {
			log("> Name must only contain alphabetical characters");
			return false;
		} else {
			return true;
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

		if (user === null) {
			log("> Person not made. Try again");
		}
	});

	let getFirst = document.getElementById("get-first");
	getFirst.addEventListener("click", function(event) {
		if (user !== null || user !== undefined) {
			user.getFirstName();
		} else {
			log("> Person has not been made");
		}
	});

	let getLast = document.getElementById("get-last");
	getLast.addEventListener("click", function(event) {
		if (user !== null || user !== undefined) {
			user.getLastName();
		} else {
			log("> Person has not been made");
		}
	});

	let getFull = document.getElementById("get-full");
	getFull.addEventListener("click", function(event) {
		if (user !== null || user !== undefined) {
			user.getFullName();
		} else {
			log("> Person has not been made");
		}
	});

	let setFirst = document.getElementById("set-first");
	setFirst.addEventListener("keydown", function(event) {
		if (event.keyCode === 13) {
			let bool = validateShort(this.value);

			if (user === null || user === undefined) {
				log("> Cannot edit person that has not been made");
			} else if (bool) {
				user.setFirstName(this.value)
			}
		}
	});

	let setLast = document.getElementById("set-last");
	setLast.addEventListener("keydown", function(event) {
		if (event.keyCode === 13) {
			let bool = validateShort(this.value);

			if (user === null || user === undefined) {
				log("> Cannot edit person that has not been made");
			} else if (bool) {
				user.setLastName(this.value);
			}
		}
	});

	let setFull = document.getElementById("set-full");
	setFull.addEventListener("keydown", function(event) {
		if (event.keyCode === 13) {
			let bool = validateFull(this.value);

			if (user === null || user === undefined) {
				log("> Cannot edit person that has not been made");
			} else if (bool) {
				user.setFullName(this.value);
			}
		}
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