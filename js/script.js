/*Descrizione: 
Visualizzare all'interno di 5 input 5 numeri casuali.
Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono
appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente,
Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array*/

// DOM ELEMENTS
const countdownElm = document.getElementById('countdown');
const tipsFormElm = document.getElementById('tips-form');
const formElm = document.getElementById('form');
const numberOneElm = document.getElementById('number-one');
const numberTwoElm = document.getElementById('number-two');
const numberThreeElm = document.getElementById('number-three');
const numberFourElm = document.getElementById('number-four');
const numberFiveElm = document.getElementById('number-five');
const startGameBtnElm = document.getElementById('start-game')
const compareNumberBtnElm = document.getElementById('compare-number')

// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

// ARRAYS
let randomNumbers = [];

// VARIABLES
let timer;
let seconds = 10


countdownElm.innerHTML = 'Click Simon Says to starts play'
// DOM EVENTS
startGameBtnElm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    timer = setInterval(() => {
        if(seconds === 0) {
            clearInterval(timer)
            formElm.classList.remove('d-none')
        } else {
        countdownElm.innerHTML = seconds
        }
        seconds--;
    }, 1000);


})
