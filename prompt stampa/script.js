//   L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// l'untente inseriesce un numero
const numero = parseInt(prompt("Inserisci un numero:"));

// convertiamo il numero inserito da string a intero
// numero = parseInt(numero);

// verifichimao se il numero è pari o dispari
if(numero % 2 === 0) {
    // se è pari, stampa il numero stesso
    console.log("Il numero inserito è pari: " + numero);
} else {
    // se è dispari, stampa il numero successivo
    console.log("Il numero inserito è dispari. Il numero successivo è: " + (numero + 1));
}
