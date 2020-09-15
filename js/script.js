// L'esercizio di oggi è composto da 3 punti:
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var studente = {
	nome: undefined,
	cognome: undefined,
	eta: undefined
};

for (var key in studente) {
	console.log(key);
};

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

for (var k in studenti) {
	console.log(studenti[k]['nome'] + ' ' + studenti[k].cognome);
};
