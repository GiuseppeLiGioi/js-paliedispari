/*
Pari e Dispari 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri e stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). 
Dichiariamo chi ha vinto.
*/

sceltaUtente = prompt("vuoi essere pari o dispari?");
sceltaNumeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));

let numeroComputer = 0;
function generatoreRandom(max, min){
numeroComputer = Math.floor((Math.random() * max) + min);

return console.log(`il numero del computer è: ${numeroComputer}`);
}

generatoreRandom(5, 1); //invocazione della funzione

let somma = 0; //dichiaro e inizializzo a 0 la variabile somma, fuori dalla funzione.
function sumIsPariODispari(num1, num2){
somma = num1 + num2;
if(somma % 2 === 0 && sceltaUtente == "pari"){
    console.log(`L'utente ha vinto perchè la somma è: ${somma} e la sua scelta era: ${sceltaUtente}`);
}
else if(somma % 2 != 0 && sceltaUtente == "pari"){
    console.log(`L'utente ha perso perchè la somma è: ${somma} e la sua scelta era: ${sceltaUtente}`); 
}
else if(somma % 2 != 0 && sceltaUtente == "dispari"){
    console.log(`L'utente ha vinto perchè la somma è: ${somma} e la sua scelta era: ${sceltaUtente}`); 
}
else{
    console.log(`L'utente ha perso perchè la somma è: ${somma} e la sua scelta era: ${sceltaUtente}`); 
}
}

sumIsPariODispari(sceltaNumeroUtente, numeroComputer); //invocazione della funzione