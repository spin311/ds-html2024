let A1 = 0;


function plus() {
	A1 = A1 + 1;
	document.getElementById("stevilo").innerHTML = A1;
	spremeniBarvo();
} 

function minus() {
	A1 = A1 - 1;
	document.getElementById("stevilo").innerHTML = A1;
	spremeniBarvo();
}

function sprememba() {
	let stevilo = document.getElementById("stevilo");
	if (A1 < -100) {
		let poskus = "Super Slabo ti gre!"
	}
	if (A1 > 1000) {
		let poskus = "Nov naziv - GOD"
	}
	
if (A1 > 99) {
	let poskus = "Pravi Pro ali samo prekomerno igraš"
}
	}

