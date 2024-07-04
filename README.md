# TRACCE

## TRACCIA 1
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma

## TRACCIA 2
L’utente inserisce prima  "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

# LOGICA

## Flow 1
- Dichiaro una funzione con parametro "word"
    - Scrivo delle istruzioni:
        - Suddivido l'input in singole lettere restituendole in un array, che chiamo "reverse_word"
        - Inverto l'ordine delle lettere
        - Riunisco in una stringa le lettere per formare la nuova parola
        - SE il valore dell'input è identico alla stringa invertita
            Stampo su console `La parola "$(word)" è palindroma. Letta al contrario è "${reverse_word}"`
        - Altrimenti
            Stampo su console `La parola "$(word)" non è palindroma. Letta al contrario è "${reverse_word}"`
- Chiedo all'utente di inserire una parola e salvo il valore in una variabile
- Chiamo la funzione inserendo come parametro la variabile appena creata