let stevec = 0;


function klik() {
	stevec = stevec + 1;
	document.getElementById("stevilo").innerHTML = stevec;
	spremeniBarvo();
} 

function odstej() {
	stevec = stevec - 1;
	document.getElementById("stevilo").innerHTML = stevec;
	spremeniBarvo();
}

function spremeniBarvo() {
	let stevilo = document.getElementById("stevilo");
	if (stevec <0) {
		stevilo.style.color = "red";}
	if (stevec < 10 && stevec>0) {
		stevilo.style.color = "purple";
	}
	if (stevec>10 && stevec<20) {
		stevilo.style.color = "gray";
	}
	if (stevec > 20 && stevec<60) {
		stevilo.style.color = "night";
	}

}
let razred='rdec';
function submitTekst(){
	let vnos=document.getElementById("besedilo1").value;
	let komentarji=document.getElementById("komentarji2");
	let novaZnacka=document.createElement('p');
	
	novaZnacka.innerHTML=vnos;
	novaZnacka.style.color='blue';
	novaZnacka.classList.add(razred);
	if (razred==='rdec') {
		razred='moder';
	}
	else{
		razred='rdec';
	}
	komentarji.appendChild(novaZnacka);
	var element = document.getElementById("komentarji2");
   	element.classList.add("rob");
   	var element_2 = document.getElementById("komentarji2");
   	element_2.classList.remove("rob");

}
function submitTekst1(){
	let vnos1=document.getElementById("besedilo2").value;
	let komentarji=document.getElementById("komentarji1");
	let novaZnacka=document.createElement('p');
	
	novaZnacka.innerHTML=vnos1;
	novaZnacka.style.color='blue';
	novaZnacka.classList.add(razred);
	if (razred==='rdec') {
		razred='moder';
	}
	else{
		razred='rdec';
	}
	komentarji.appendChild(novaZnacka);
	var element = document.getElementById("komentarji1");
   	element.classList.add("rob");
   	var element_2 = document.getElementById("komentarji1");
   	element_2.classList.remove("rob");
}