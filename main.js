const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWW WWW W WWW W W W",
  "S         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W W",
  "W     W W W W W W WWW",
  "WWWWW W W W W W   W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W   W           W   W",
  "WWWWWWWWWWFWWWWWWWWWW"
];
// const map = [
//   "WWWWWWWWWWWWWWWWWWWWW",
//   "W   W     W     W W W",
//   "W W W WWW WWWWW W W W",
//   "W W W   W     W W   W",
//   "W WWWWWWW W WWW W W W",
//   "W         W     W W W",
//   "W WWW WWWWW WWWWW W W",
//   "W W   W   W W     W W",
//   "W WWWWW W W W WWW W F",
//   "S     W W W W W W WWW",
//   "WWWWW W W W W W W W W",
//   "W     W W W   W W W W",
//   "W WWWWWWW WWWWW W W W",
//   "W       W       W   W",
//   "WWWWWWWWWWWWWWWWWWWWW"
// ];

const mazeEl = document.querySelector("#maze");
let player = document.getElementById("player");
for (const rowString of map) {
  let rowMarkup = "";

  for (let cellChar of rowString) {
    const wallMarkup = '<div class="cell wall"></div>';
    const floorMarkup = '<div class="cell floor"></div>';
    const startMarkup = '<div  id="start" class="cell start"></div>';

    if (cellChar === "W") {
      rowMarkup += wallMarkup;
      cellChar = "";
    } else if (cellChar === "S") {
      rowMarkup += startMarkup;
    } else {
      rowMarkup += floorMarkup;
    }
  }
  mazeEl.innerHTML += '<div class="row">' + rowMarkup + "</div>";
}
document.getElementById("start").appendChild(player);
// Console.log(logKey);
let playerTop = 0;
let playerLeft = 0;
let playerRow = 5;
let playercolumn = 0;
document.addEventListener("keydown", logKey);

function logKey(e) {
  if (e.keyCode == "38") {
    if (map[playerRow - 1][playercolumn] !== "W") {
      playerTop = playerTop - 30;
      playerRow = playerRow - 1;
    }
  } else if (e.keyCode == "40") {
    // down arrow
    // document.getElementById("player").style.top = playerTop + "px";
    if (map[playerRow + 1][playercolumn] !== "W") {
      playerTop = playerTop + 30;
      playerRow = playerRow + 1;
    }
  } else if (e.keyCode == "37") {
    // left arrow
    // document.getElementById("player").style.top = playerLeft + "px";
    if (map[playerRow][playercolumn - 1] !== "W") {
      playerLeft = playerLeft - 30;
      playercolumn = playercolumn - 1;
    }
  } else if (e.keyCode == "39") {
    // right arrow
    // document.getElementById("player").style.top = playerLeft + "px";
    if (map[playerRow][playercolumn + 1] !== "W") {
      playerLeft = playerLeft + 30;
      playercolumn = playercolumn + 1;
      checkWinner();
    }
  }
  document.getElementById("player").style.top = playerTop + "px";
  document.getElementById("player").style.left = playerLeft + "px";
}

function checkWinner() {
  console.log(document.getElementById("player").lastElementChild);
  let finish = document.getElementById("player");
  if (finish.childElementCount === 4) alert("You Won!");
}
