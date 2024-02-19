// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!



let carrello = 0;
let dataBase =[];
let ambassador = [];
let totale;
let totaleScontato;

let nart1; 
let nart2; 
let nart3; 





// effettuata prova inserimento costanti all'interno dell'array e successivamente stampa sia console.table che console.log con la singola frase dopo ogni inserimento.
dataBase.push(marco);
console.table(dataBase);
console.log("Nome utente " + dataBase[0].name + " Cognome utente " +  dataBase[0].lastName + " il valore isAmbassador è " + dataBase[0].isAmbassador);

dataBase.push(paul);
console.table(dataBase);
console.log("Nome utente " + dataBase[1].name + " Cognome utente " +  dataBase[1].lastName + " il valore isAmbassador è " + dataBase[1].isAmbassador);


dataBase.push(amy);
console.table(dataBase);
console.log("Nome utente " + dataBase[2].name + " Cognome utente " +  dataBase[2].lastName + " il valore isAmbassador è " + dataBase[2].isAmbassador);

// procedo con inserimento tramite ciclo for

for (let i=0; i< dataBase.length; i++) {
  console.log("Nome utente " + dataBase[i].name + " Cognome utente " +  dataBase[i].lastName + " il valore isAmbassador è " + dataBase[i].isAmbassador);}



// inserisco tramite promt il numero di articoli da moltiplicare per il costo di ogni singolo prezzo
 nart1 = prompt("Ciao inserisci numeri di articoli da 34€")
 let parsart1 = parseInt(nart1)  // parso il numero cosi da assicurarmi che sia un numero intero
 nart2 = prompt("Ora inserisci numeri di articoli da 5€")
 let parsart2 = parseInt(nart2) // parso il numero cosi da assicurarmi che sia un numero intero
 nart3 = prompt("Ed infine inserisci numeri di articoli che intendi inserire da 2€")
 let parsart3 = parseInt(nart3) // parso il numero cosi da assicurarmi che sia un numero intero
console.log(parsart1);
console.log(parsart2);
console.log(parsart3);



 // calcolo del carrello tramite moltiplicazione  dei singoli prezzi per il numero di articoli
 carrello = (prices[0] * parsart1 ) + (prices[1]* parsart2) + (prices[2] * parsart3);
 console.log("il costo temporaneo del carrello è " + carrello) //verifico saldo temporaneo del carrello prima di far intervenire gli if

// prendo in esempio il primo oggetto per far elaborare il costo effettivo del carrello e verifiche che abbia valore "isAmbassador" pari a true
 if (marco.isAmbassador){
     let sconto = (carrello * 30)/100;
      carrello -= sconto;
      console.log("il costo totale per Ambassador è di " + carrello  + " €");
      console.log("lo sconto applicato è di € " + sconto)
 } 


// prendo in esempio il secondo oggetto per far elaborare il costo effettivo del carrello e verifiche che abbia valore "!isAmbassador" pari a true
if (amy.isAmbassador){
  let sconto = (carrello * 30)/100;
   carrello -= sconto;
   console.log("il costo totale per Ambassador è di " + carrello  + " €");
   console.log("lo sconto applicato è di € " + sconto)
} 


// creo ulteriore if per valutare se cliente deve pagare spedizione se il carrello è inferiore a 100€
if ( carrello < 100) {
totale = carrello + shippingCost
console.log(" il carrello essendo inferiore a 100€ verrà sommata la spedizione di €50 e il totale da pagare è "  + totale)

} else {
console.log(" Hai diritto alla spedizione gratuita. Il totale da pagare è: " + carrello )
}




// crea un SECONDO array in cui inserirai SOLO gli ambassador. 
let dataBaseAmbassador = [];

for (let i=0; i< dataBase.length; i++) {
if (dataBase[i].isAmbassador) {
dataBaseAmbassador.push(dataBase[i]);
}
}
console.table(dataBaseAmbassador)
      
   
