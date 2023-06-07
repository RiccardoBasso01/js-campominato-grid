console.log('JS OK');

// Recupero gli elementi dal DOM
const grid = document.getElementById('grid'); // GRIGLIA
const play = document.getElementById('play'); // BOTTONE
const difficulty = document.getElementById('difficulty'); // DIFFICOLTÁ
const bombNumber = document.getElementById('bomb-number'); // Numero di BOMBE
// Numero di celle
let numberOfCell;

// Al click del bottone gioca
play.addEventListener('click', function () {
    // Faccio apparire la griglia
    grid.classList.remove('d-none');

    if(difficulty.value === 'easy'){
        grid.classList.add('easy');
        grid.classList.remove('medium');
        grid.classList.remove('hard');

        numberOfCell = '64';
        bombNumber.innerText = '10 BOMBE';

    }else if(difficulty.value === 'medium'){
        grid.classList.remove('easy');
        grid.classList.add('medium');
        grid.classList.remove('hard');
        
        numberOfCell = '81';
        bombNumber.innerText = '20 BOMBE';
        
    }else if(difficulty.value === 'hard'){
        grid.classList.remove('easy');
        grid.classList.remove('medium');
        grid.classList.add('hard');
        
        numberOfCell = '100';
        bombNumber.innerText = '30 BOMBE';

    }

    console.log('Numero di celle: ', numberOfCell)

    // Elimino le "vecchie celle" prima di generare le nuove
    grid.innerText = '';

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
    
})
