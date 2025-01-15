/*
Palidroma 
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.
*/

//DICHIARO
let parolaUtente = prompt("inserisci una parola da verificare");
let parolaUtenteReverse = parolaUtente.split("").reverse().join("") ;
//console.log(parolaUtenteReverse);   //stampa per verificare che funzioni correttamente.


//CREO LA MIA FUNZIONE CUSTOM
function isPalindroma(parola1, parola2){
if(parola1===parola2){
  console.log(`le parole sono palindrome perchè: ${parola1} è uguale a: ${parola2}`);
}
else{
    console.log(`le parole non sono palindrome perchè: ${parola1} è diversa da: ${parola2}`);
}
}

isPalindroma(parolaUtente, parolaUtenteReverse);

