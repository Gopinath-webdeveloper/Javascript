const cells = document.querySelectorAll(".cell");
// console.log(cells);
const statusText = document.querySelector(".statusText");
const restartBtn = document.querySelector("#restart");

const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";

let running = false;

initial();

function initial() {
  cells.forEach((cell) => cell.addEventListener("click", cellclk));
  // restartBtn.addEventListener("click", restart());
  statusText.textContent = `${currentPlayer} 's turn`;
  running = true;
}

function cellclk() {
  // console.log("cell clk funtion");
  // console.log(this);

  //console.log(options[Cellindex]);
  const Cellindex = this.getAttribute("cellIndex");

  if (options[Cellindex] != "" || !running) {
    return;
  }

  updateCell(this, Cellindex);
  // console.log(options[Cellindex]);
  // console.log(options);
  checkWinner();
  // changePlayer();
}
function updateCell(cell, index) {
  //console.log("update cells");
  //console.log(currentPlayer);

  options[index] = currentPlayer;

  cell.textContent = currentPlayer;

  // currentPlayer = currentPlayer == "x" ? "o" : "x";
}
function changePlayer() {
  currentPlayer = currentPlayer == "x" ? "o" : "x";
  statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winner.length; i++) {
    console.log("times cilked", i);
    const condition = winner[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    console.log(cellA);
    console.log(cellB);
    console.log(cellC);

    if (cellA == "" || cellB == "" || cellC == "") {
      console.log("contine");
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusText.textContent = `${currentPlayer} wins the game`;
    running = false;
  } else if (!options.includes("")) {
    statusText.textContent = ` match draw `;
  } else {
    changePlayer();
  }
}
restartBtn.addEventListener("click", function () {
  console.log("clicked");
  options = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "x";

  statusText.textContent = `${currentPlayer} 's turn`;
  cells.forEach((cell) => (cell.textContent = " "));
  running = true;
});

/*
function restart() {
  console.log("clicked");
  options = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "x";

  statusText.textContent = `${currentPlayer} 's turn`;
  cells.forEach((cell) => (cell.textContent = " "));
  running = true;
} */
