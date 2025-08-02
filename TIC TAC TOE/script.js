const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const message = document.getElementById("message");
const restartButton = document.getElementById("restartButton");

let currentPlayer = "X";
let gameActive = true;

cells.forEach(cell => {
  cell.addEventListener("click", handleClick, { once: true });
});

restartButton.addEventListener("click", startGame);

function handleClick(e) {
  const cell = e.target;
  if (!gameActive) return;

  cell.textContent = currentPlayer;

  if (checkWin(currentPlayer)) {
    message.textContent = `${currentPlayer} wins!`;
    gameActive = false;
  } else if (isDraw()) {
    message.textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin(player) {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];

  return winPatterns.some(pattern => {
    return pattern.every(index => {
      return cells[index].textContent === player;
    });
  });
}

function isDraw() {
  return [...cells].every(cell => cell.textContent);
}

function startGame() {
  currentPlayer = "X";
  gameActive = true;
  message.textContent = "";
  cells.forEach(cell => {
    cell.textContent = "";
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
}
