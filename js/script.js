// ========== FIRST EXERCISE ==========
// DICHIARAZIONE DELLA FUNZIONE
function palindrome(word) {
    // With split("") method, create an array with single letters. With reverse() methos, reverse the order of the array elements. With join("") method, combine the elements into a string, without commas
    let reverseWord = word.split("").reverse().join("");
    // If word's value is the same of reverseWord's value, the word is a palindrome
    if (word == reverseWord) {
        console.log(`La parola "${word}" è palindroma. Letta al contrario è "${reverseWord}".`)
    } else {
        console.log(`La parola "${word}" non è palindroma. Letta al contrario è "${reverseWord}".`)
    }
}
// variables for user input
let userWord = prompt("Inserisci una parola")
// Function invocation with userWord as a parameter
palindrome(userWord)