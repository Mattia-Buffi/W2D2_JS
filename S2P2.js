// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che 
  maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione 
(anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per 
coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' 
un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

//lista utenti
let marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true}

let paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false}

let amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false}

let tom = {
  name: "Tom",
  lastName: "Red",
  isAmbassador: true}

let jerry = {
  name: "Jerry",
  lastName: "Black",
  isAmbassador: true}

let prices = [34,5,2,37,22];  //lista prezzi prodotti
let shippingCost = 50;        //costo spedizione
let utenteCheEffettuaLAcquisto = amy; //cambia il valore qui per provare se il tuo algoritmo funziona!
let discountPerc=0.3;                 //percentuale di sconto da applicare
let deliveryBench=100.0;                //soglia spedizione gratuita
//variabili
let utenti=[]
let premiumClub=[]
let couponValue=0;
let cartValue=0;
let totalValue=0;
let deltaFreeDelivery=0;

//creao array con i vari utenti
utenti.push(marco,paul,amy,tom,jerry)

// Stampa nome cognome e se è o meno ambassador
for (let index = 0; index < utenti.length; index++) {
  console.log(utenti[index].name +" "+utenti[index].lastName+" "+(utenti[index].isAmbassador?" è un ambassador":" non è un ambassador"));  
}
// creo array di soli ambassador
for (let index = 0; index < utenti.length; index++) {
  if(utenti[index].isAmbassador){    //inserisce solo se valore true
    premiumClub.push(utenti[index]);
  }  
}
console.log("Buongiorno "+utenteCheEffettuaLAcquisto.name)
// somma totale carrello
for (let element of prices) {
  cartValue+=element;
}
console.log("Il Totale del tuo carrello è: "+cartValue);
//analisi sconto
if(utenteCheEffettuaLAcquisto.isAmbassador) {
  couponValue=cartValue*(discountPerc);
  console.log("Sconto ambassador: - "+couponValue);
  cartValue=cartValue-couponValue;
}
//analisi spedizione
if(cartValue>=deliveryBench){
  console.log("Congratulazioni! La spedizione è gratuita");
  totalValue=cartValue;
}else{
  //allert con valore per spedizione gratis
  if(utenteCheEffettuaLAcquisto.isAmbassador){deltaFreeDelivery=(deliveryBench-cartValue)/(1-discountPerc);
  }else{deltaFreeDelivery=deliveryBench-cartValue}
  alert("Aggiungi "+deltaFreeDelivery+" per ottenere la spedizione gratuita");

  console.log("Costo spedizione per il tuo indirizzo: "+shippingCost);
  totalValue=cartValue+shippingCost;
}
//totale scontrino
console.log("Totale spesa: "+totalValue);

//Stampa del Club Ambassador
//console.log(premiumClub);

// function newProfile (a,b,c){
//   utenti.push({name:a,lastName:b, isAmbassador:c});
//   console.log(utenti);
// }