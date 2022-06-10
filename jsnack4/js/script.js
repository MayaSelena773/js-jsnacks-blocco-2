
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

//Dati due array di lunghezze diverse
const longArray = [1, 7, 14, 27, 39, 56, 77];
const shortArray = [3, 4, 8];

//Finchè uno è più breve dell'altro produco numeri random
 while (shortArray.length < longArray.length){

     let casualNumber = Math.floor(Math.random() * 100) + 1;

     //che poi inserisco nell'array più breve
     shortArray.push(casualNumber);

 }

 //Stampo in console
 console.log(shortArray)
