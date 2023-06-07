console.log('JS OK');

// Recupero le celle della griglia
const cell = document.querySelectorAll('.cell');
console.log('Numero di celle: ', cell.length);

// Assegno i numeri in sequenza a tutte le celle
for(let i = 0; i < cell.length; i++){
    cell[i].innerText = i + 1;
}