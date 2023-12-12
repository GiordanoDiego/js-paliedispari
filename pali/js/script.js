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
    Palidroma
        Chiedere all'utente di inserire una parola ok
        Creare una funzione per capire se la parola inserita è palindroma

*/

//funzioni
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

function isPalindrome(word, reverseWord){
    if(word == reverseWord){
        alert("la parola scelta "+ word + " è palindroma");
    }
    else{
        alert("La parola scelta "+ word + " non è palindroma");

    }
}

const userWord = prompt("scrivi una parola per vedere se è palindroma:");
console.log('userWord', userWord, typeof userWord);

const reverseUserWord = reverseString(userWord);
console.log('reverseUserWord', reverseUserWord, typeof reverseUserWord);

isPalindrome(userWord, reverseUserWord);