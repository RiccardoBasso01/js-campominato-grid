console.log('JS OK');

// Recupero gli elementi dal DOM
const grid = document.getElementById('grid'); // GRIGLIA
const play = document.getElementById('play'); // BOTTONE

const numberOfCell = 100;

// Genero le celle
for (let i = 0; i < numberOfCell; i++) grid.innerHTML += `<div class="cell"></div>`;

const cell = document.querySelectorAll('.cell'); // CELLE
console.log('Numero di celle: ', cell.length);

// Assegno i numeri in sequenza a tutte le celle
for (let i = 0; i < cell.length; i++) {
    cell[i].innerText = i + 1;
    // Al click sulle celle
    cell[i].addEventListener('click', function () {
        console.log('Cliccata cella numero: ', i);
        cell[i].classList.toggle('active');
    })
}

// Al click del bottone
play.addEventListener('click', function () {
    // Faccio apparire la griglia
    grid.classList.remove('d-none');
})

