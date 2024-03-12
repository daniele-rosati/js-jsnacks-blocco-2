// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// chiediamo all'utente di inserire 2 parole 

const firstWord = prompt("Inserisci la prima parola");
const secondWord = prompt("Inserisci la seconda parola");

// determiniamo la lunghezza delle parole

const lunghezzafirstWord = firstWord.length;
const lunghezzasecondWord = secondWord.length;

// stampiamo prima la parola più corta poi quella più lunga

if (lunghezzafirstWord <= lunghezzasecondWord){
    console.log(firstWord);
    console.log(secondWord);
} else if (lunghezzafirstWord >= lunghezzasecondWord) {
    console.log(secondWord);
    console.log(firstWord);
 } // else {
//     console.log(firstWord);
//     console.log(secondWord);
// }