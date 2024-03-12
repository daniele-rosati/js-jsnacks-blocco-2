//   L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// l'untente inseriesce un numero
const numero = parseInt( prompt("Inserisci un numero:"));

// verifichimao se il numero è pari o dispari
if(numero % 2 === 0) {
    // se è pari, stampa il numero inserito
    console.log("Il numero inserito è pari: " + numero);
} else {
    // se è dispari, stampa il numero successivo al numero inserito (es. inserisco 5 (è dispari) stampa il 6 (che è pari))
    console.log("Il numero inserito è dispari. Il numero successivo è: " + (numero + 1));
}
