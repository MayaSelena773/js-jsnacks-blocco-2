
//Calcola la somma e la media dei primi 10 numeri.

//Somma i numeri da 1 a 10
let sumNumbers = 0;

for (i = 0; i <= 10; i++) {

    let myNumber = i;
    sumNumbers += myNumber;
}

//Il risultato dividilo per il numero delle cifre
const media = sumNumbers / 10;

//Stampa in console
console.log(sumNumbers);
console.log(media);