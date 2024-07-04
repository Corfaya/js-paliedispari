# TRACCE

## TRACCIA 1
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma

## TRACCIA 2
L’utente inserisce prima "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

# LOGICA

## Flow 1
- Dichiaro una funzione con parametro "word"
    - Scrivo delle istruzioni:
        - Suddivido l'input in singole lettere restituendole in un array, che chiamo "reverseWord"
        - Inverto l'ordine delle lettere
        - Riunisco in una stringa le lettere per formare la nuova parola
        - SE il valore dell'input è identico alla stringa invertita
            Stampo su console `La parola "${word}" è palindroma. Letta al contrario è "${reverseWord}"`
        - Altrimenti
            Stampo su console `La parola "${word}" non è palindroma. Letta al contrario è "${reverseWord}"`
- Chiedo all'utente di inserire una parola e salvo il valore in una variabile
- Chiamo la funzione inserendo come parametro la variabile appena creata

## Flow 2
- Dichiaro una funzione con ritorno senza parametri e la chiamo "random"
    - Scrivo la seguente istruzione:
        - Restituire un numero randomico tra 1 e 5 compresi, evitando numeri decimali

- Dichiaro una funzione con ritorno e con parametro "num", e la chiamo "even"          
    - Scrivo la seguente istruzione                                                       
        - Restituire se è vero o falso che num è pari                                     

- (Step 1) Chiedo all'utente di scegliere tra pari e dispari
    - Rendo minuscolo il valore inserito dall'utente
    - Salvo tutto in una variabile che chiamo "userSelection"
- (Step 2) Chiedo all'utente di inserire un numero da 1 a 5
    - Rendo numerica la risposta dell'utente (parseInt())
    - Salvo tutto in una variabile che chiamo "userNum"
- Invoco la funzione "random" in una variabile (pcNum)
- Dichiaro una variabile di somma e le do valore userNum + pcNum
- Dichiaro una variabile per il risultato finale ("tot")
- SE la somma è pari (richiamo della funzione even() nella condizione)
    - Assegno al risultato finale "pari"
- ALTRIMENTI
    - Assegno al risultato finale "dispari"
- SE il risultato finale corrisponde alla scelta dell'utente tra pari e dispari
    - Stampo su console `Hai scelto ${userSelection} e il numero ${userNum}. Il numero del pc è ${pcNum} La somma è ${tot}: hai vinto!`
- ALTRIMENTI
    - Stampo su console `Hai scelto ${userSelection} e il numero ${userNum}. Il numero del pc è ${pcNum} La somma è ${tot}: hai perso!`