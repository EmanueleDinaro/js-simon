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
const randomNumbersContainer = document.getElementById('rnd-number-container')      
const countdownElm = document.getElementById('countdown');
const tipsGameElm = document.getElementById('tips-game');

const randomNumbers = document.querySelectorAll('.rnd-number')
const startGameBtnElm = document.getElementById('start-game')

const formElm = document.getElementById('form');
const tipsFormElm = document.getElementById('tips-input');
const inputFormElm = document.querySelectorAll('.form-control')

const numberOneElm = document.getElementById('number-one');
const numberTwoElm = document.getElementById('number-two');
const numberThreeElm = document.getElementById('number-three');
const numberFourElm = document.getElementById('number-four');
const numberFiveElm = document.getElementById('number-five');

const compareNumberBtnElm = document.getElementById('compare-number')
const resultElm = document.getElementById('result')


// FUNCTIONS
/*function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}*/
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Numero casuale tra 0 e 99
}


// ARRAYS
const randomNumbersArray = [];

// VARIABLES
let seconds = 10

countdownElm.innerHTML = 'Clicca "Simon Says" per iniziare a giocare'
// DOM EVENTS
startGameBtnElm.addEventListener('click', function(event) {
    event.preventDefault();
    
    timer = setInterval(() => {
        if(seconds <= 0) {
            clearInterval(timer)
            formElm.classList.remove('d-none')
            startGameBtnElm.classList.add('d-none')
            randomNumbersContainer.classList.add('d-none')
            countdownElm.classList.add('d-none')
        } else {
        countdownElm.innerHTML = seconds
        startGameBtnElm.classList.add('d-none')
        randomNumbersContainer.classList.remove('d-none')
        }
        seconds--;
    }, 1000);

    for (let i = 0; i < randomNumbers.length; i++) { // CICLO PER LA "LUNGHEZZA" DEL NUMERO DI VOLTE IN CUI LA VARIABILE E' PRESENTE
        const singleRandomNumber = generateRandomNumber(); // GENERO RANDOMICAMENTE UN NUMERO DA 0 A 100 E LO INSERISCO ALL'INTERNO DELLA VARIABILE singleRandomNumber
        randomNumbers[i].innerHTML = singleRandomNumber; // INSERISCO IL SINGOLO NUMERO RANDOMICO ALL'INTERNO DEL "<div> rnd-number" GRAZIE ALL'inner.HTML
        randomNumbersArray.push(singleRandomNumber); //PUSHO ALL'INTERNO DELL'ARRAY VUOTO IL SINGOLO NUMERO RANDOMICO GENERATO, PER TUTTA LA DURATA DEL CICLO
    }
    
    
})
