'use strict';

// 1. Aufgabe:
// Aktuelles Datum ausgeben lassen

let datum = new Date();
let stunden = datum.getHours();
let minuten = datum.getMinutes();
document.getElementById("datum").innerHTML = `Es ist jetzt ${stunden} Uhr und ${minuten} Minuten!`;
/*-------------------------------------------------------------------------------------------------------------------------------------------- */

// 2. Aufgabe:
// Bildwechsel bei Mouseover

function austauschen(id, quelle) {
	document.getElementById(id).src = quelle;
}
/*-------------------------------------------------------------------------------------------------------------------------------------------- */

// 3. Aufgabe:
// Formular

function check() {
	var nachname = document.getElementById("nachname");
	var email = document.getElementById("email");
	if (nachname.value == "") {
		alert("Bitte geben Sie Ihren Nachnamen an!");
		nachname.focus();
		return false;
	} else if (email.value == "") {
		alert("Bitte geben Sie Ihre E-Mail an!");
		email.focus();
		return false;
	}
}
/*-------------------------------------------------------------------------------------------------------------------------------------------- */
