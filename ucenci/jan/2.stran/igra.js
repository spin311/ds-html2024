function post() {
	let vnos = document.getElementById("besedilo").value;
	let komentarji = document.getElementById("komentarji");
	let novaZnacka = document.createElement('p');
	novaZnacka.innerHTML = vnos;
	novaZnacka.style.color = 'black';
	komentarji.appendChild(novaZnacka);
	document.getElementById("besedilo").value = "";
}
