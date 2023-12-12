/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/

/*
    Pari e Dispari
    - L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    
    - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

    - Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

    Dichiariamo chi ha vinto.
*/

//Funzioni
function randomNumber(){
    let x = Math.floor(Math.random() * 5) + 1;
   return x;
}

function pariODispari(x){
    if(x % 2 == 0){
        console.log('La somma ', x, 'è pari'); 
        return 'pari'; 
    }
    else{
        console.log('La somma ', x, 'è dispari'); 
        return 'dispari'; 
    }
}



const userNumber = prompt('Scrivi un numero da 1 a 5:');
const userNumberInt = parseInt(userNumber);
document.getElementById('user_number').innerHTML = userNumberInt;

console.log('userNumberInt', userNumberInt, typeof userNumberInt);

const computerRandom = randomNumber();

console.log('computerRandom', computerRandom, typeof computerRandom);

const sum = userNumberInt + computerRandom;
console.log('sum', sum, typeof sum);

pariODispari(sum);

const resultPariODispari = pariODispari(sum);
console.log('resultPariODispari', resultPariODispari, typeof resultPariODispari);



const buttonEven = document.getElementById("button_even");
console.log('buttonEven', buttonEven, typeof buttonEven);
const buttonOdd = document.getElementById("button_odd");
console.log('buttonOdd', buttonOdd, typeof buttonOdd);

buttonEven.addEventListener('click', function(){
    if ("pari" == resultPariODispari){
        const result = document.getElementById('result').innerHTML = 'Hai indovinato, hai vinto. ' + " hai scelto: Pari " + " ,la somma dei numeri è " + sum + " che è: " + resultPariODispari;
        document.getElementById('computer_number').innerHTML = computerRandom;

    
    } else {
        const result = document.getElementById('result').innerHTML = 'Non hai indovinato, hai perso.  ' + " hai scelto: Pari "  + " ,la somma dei numeri è  " + sum + " che è: " + resultPariODispari;

        document.getElementById('computer_number').innerHTML = computerRandom;

    }
})

buttonOdd.addEventListener('click', function(){
    if ("dispari" == resultPariODispari){
        const result = document.getElementById('result').innerHTML = 'Hai indovinato, hai vinto. ' + " hai scelto: Dispari" + " ,la somma dei numeri è " + sum + " che è: " + resultPariODispari;
      
        document.getElementById('computer_number').innerHTML = computerRandom;

    
    } else {
        const result = document.getElementById('result').innerHTML = 'Non hai indovinato, hai perso.  ' + " hai scelto: Dispari" + " ,la somma dei numeri è  " + sum + " che è: " + resultPariODispari;
      
        document.getElementById('computer_number').innerHTML = computerRandom;

    }
})