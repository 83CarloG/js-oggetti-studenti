// L'esercizio di oggi è composto da 3 punti:
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
$(document).ready(function	() {
	// Getto il mio template
	var source = $('#entry-template').html();
	// Lo compilo
	var template = Handlebars.compile(source);
	// Inserisco un contenuto
	var context = {
		title: 'My New Post',
		body: 'This is my first post!'
	};
	// Aggancio il contenuto al template
	var html = template(context);
	// Lo innietto nell'html
	var app = $('#app').append(html);


// oggetto studente definito solo le chiavi/proprietà
	var studente = {
		nome: undefined,
		cognome: undefined,
		eta: undefined
	};
// ciclo l'oggetto e ne ricavo le proprietà
	for (var key in studente) {
		console.log(key);
	};
// array di oggetti
	var studenti = [
		{
			nome: 'Carlo',
			cognome: 'Colombo',
			eta: 37
		},
		{
			nome: 'Maria',
			cognome: 'Marra',
			eta: 39
		},
		{
			nome: 'Silvia',
			cognome: 'Brambilla',
			eta: 31
		},
		{
			nome: 'Angelo',
			cognome: 'Rossi',
			eta: 20
		},
		{
			nome: 'Mario',
			cognome: 'Bianchi',
			eta: 25
		}
	];
// ciclo l'array e ne estrapolo i valori per le proprietà nome e cognome degli studenti
	for (var k in studenti) {
		console.log(studenti[k]['nome'] + ' ' + studenti[k].cognome);
	};
	// Uso proprmt per aggiornare l'oggetto studente e push per inserirlo nell'array studenti
	studente.nome = prompt('Inserisci nome studente');
	studente.cognome = prompt('Inserisci cognome studente');
	studente.eta = parseInt(prompt('inserisci età'));
	console.log(studente);
	studenti.push(studente);
	console.log(studenti);
});
