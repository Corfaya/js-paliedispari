// ========== FIRST EXERCISE ==========
// DICHIARAZIONE DELLA FUNZIONE
function palindrome(word) {
    // With reverse() method, reverse the order of the letters
    let reverseWord = word.reverse();
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