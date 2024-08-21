let currentPlayer = "X";
let array = Array(9).fill(null);
let gameActive = false;

function checkWinner(){
  if(
    (array[0] !== null && array[0] == array[1] && array[1] == array[2])  ||
    (array[3] !== null && array[3] == array[4] && array[4] == array[5])  ||
    (array[6] !== null && array[6] == array[7] && array[7] == array[8])  ||
    (array[0] !== null && array[0] == array[3] && array[3] == array[6])  ||
    (array[1] !== null && array[1] == array[4] && array[4] == array[7])  ||
    (array[2] !== null && array[2] == array[5] && array[5] == array[8])  ||
    (array[0] !== null && array[0] == array[4] && array[4] == array[8])  ||
    (array[2] !== null && array[2] == array[4] && array[4] == array[6]) 
  ) {
    document.getElementById('winnerDisplay').textContent = `Winner is ${currentPlayer}`;
    gameActive = false;
    return;
  }
  if(!array.some(e => e === null)){
    document.getElementById('winnerDisplay').textContent = `It's a draw!`;
    gameActive = false;
    return;
  }
}

function handleClick(element){
  if (!gameActive) return;

  const id = Number(element.id);
  if(array[id] !== null) return;
  array[id] = currentPlayer;
  element.innerText = currentPlayer; 
  checkWinner(); 
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function startGame() {
  array.fill(null);
  document.querySelectorAll('.col').forEach(cell => cell.innerText = '');
  document.getElementById('winnerDisplay').textContent = '';
  gameActive = true;
}

function resetGame() {
  array.fill(null);
  document.querySelectorAll('.col').forEach(cell => cell.innerText = '');
  document.getElementById('winnerDisplay').textContent = '';
  currentPlayer = "X";
  gameActive = false;
}



