const cells = document.querySelectorAll(".cell");
//console.log(cells);

let bg = document.querySelector("#gamecontainer");
let statusText = document.querySelector(".statusText");

let currentPlayer = "x";

// window.onload = () => {
//   options = JSON.parse(localStorage.getItem());
// };

statusText.textContent = `${currentPlayer}'s turns`;
var options = ["", "", "", "", "", "", "", "", ""];
//console.log(options.includes("") ? options : "not  expty");
window.onload = () => {
  options = JSON.parse(localStorage.getItem("option"));

  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = options[i];
  }
  statuss = JSON.parse(localStorage.getItem("status"));
  // console.log(statuss);
  // console.log(typeof statuss);
  statusText.textContent = statuss;

  // statusText = statuss;
};
let running = false;
let winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let initial = function () {
  // console.log("initial called");
  //   cells.forEach((cell) =>
  //     cell.addEventListener("click", function () {
  //       //console.log("cells is clicked", cell);
  //       cell.textContent = "x";

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
      //      console.log(cells[i], "clicked");

      if (cells[i].textContent == "" && !running) {
        console.log(" this is worked");
        cells[i].textContent = `${currentPlayer}`;
        options[i] = `${currentPlayer}`;
        localStorage.setItem("option", JSON.stringify(options));
        // console.log(options);
        checkWinner();
        // currentPlayer = currentPlayer == "x" ? "o" : "x";
      }
    });
  }
};

initial();

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winner.length; i++) {
    const condition = winner[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    // console.log(cellA);
    // console.log(cellB);
    // console.log(cellC);
    if (cellA == "" || cellB == "" || cellC == "") {
      //   console.log(cellA, typeof cellA);
      //   console.log(cellB);
      //   console.log(cellC);
      //   console.log("contine");

      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      console.log("breaked");
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `${currentPlayer} wins the game`;

    localStorage.setItem("status", JSON.stringify(statusText.textContent));
    running = true;
    bg.style.backgroundColor = "green";
  } else if (!options.includes("")) {
    console.log("match draw is callled");
    console.log(options);
    statusText.textContent = ` match draw `;
    bg.style.backgroundColor = "yellow";
    localStorage.setItem("status", JSON.stringify(statusText));
  } else {
    ChangePlayer();
  }
}

function ChangePlayer() {
  currentPlayer = currentPlayer == "x" ? "o" : "x";
  statusText.textContent = `${currentPlayer}'s turns`;
}

let restart = document.querySelector("#restart");

restart.addEventListener("click", function () {
  console.log("restarted");
  currentPlayer = "x";
  statusText.textContent = `${currentPlayer}'s turns`;

  options = ["", "", "", "", "", "", "", "", " "];
  console.log(options);
  running = false;
  console.log(running);
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  bg.style.backgroundColor = "white";
  // for (let j = 0; j < cells.length; j++) {
  //   console.log(cells[j].textContent);
  // }
});
