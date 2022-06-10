
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

 //Dichiaro la variabile
 let sumUserNumber = 0;

  //Ripeto la richiesta per 5 volte
  for (i = 0; i < 5; i++) {
      let userNumber = parseInt(prompt("Scrivi un numero"));

      //Aggiungo ogni numero di volta in volta
    
         sumUserNumber += userNumber;
    
  }
  //Stampo in console il risultato finale
  console.log(sumUserNumber);


//VERSIONE CON WHILE:

// //Dichiaro le variabili
// let i = 0


// //Chiedo fino a 5 volte un numero all'utente
//  while (i < 5) {

//      let userNumber = prompt ('Dimmi un numero');
//       userNumber = parseInt (userNumber);

//      // Dopo effettuo la somma dei numeri dati
//       sumNumbers += userNumber;

//      i++
//  }

//  console.log(sumNumbers);
