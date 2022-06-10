
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.


//Creo l'array vuoto
let array = [];

 //Dichiaro la variabile
sumNumbers = 0;

//Chiedo un numero all'utente finchè la somma arriva a 50
while (sumNumbers < 50) {

    let userNumber = parseInt ( prompt("Scrivi un numero"));

    sumNumbers += userNumber;

    array.push(userNumber);
    
}
console.log(sumNumbers);