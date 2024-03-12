// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// creo un arrey contenente dei numeri
const numbers = [1,2,3,4,5,6,7,8,9,10];

// seleziono gli elementi del div

const divRed = document.getElementById("red");
const divGreen = document.getElementById("green");

// creo un ciclo per determinare se i numeri dispari sono rossi o verde per i pari

for (let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 !== 0){
        divRed.innerHTML += numbers[i] + " ";
    } else {
        divGreen.innerHTML += numbers[i] + " ";
    }
}
