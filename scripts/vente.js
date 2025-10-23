slider = document.querySelector("#vente-slider");
const articleNumber = 42;

let articleNumberPerRow = 0;
let articleSize = 400;

let gameOn = false;

const width = 7;
const height = 6;

let playerTurn = "1"; // 1 : Yellow, 2 : Red
let gameBoard = [
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"]
]

function showDescription(id) {
  let popup = document.getElementById(id);
  popup.classList.toggle("vente-show");
}

slider.oninput = function (e) {
  articleSize = this.value;
  updateArticleSize();
  updateArticlePerRow();
}

function updateArticleSize() {
  for (var i = 1; i <= articleNumber; i++) {
    let article = document.getElementById("vente-" + i.toString());
    article.style.width = articleSize.toString()+"px";
    article.style.height = articleSize.toString()+"px";

  }
}

function updateArticlePerRow() {
  let section = document.getElementById("vente-article");
  let articles = section.children;

  let top = articles[0].offsetTop;
  let sevenPerRow = true;

  for (let i=0; i<7; i++) {
    if (articles[i].offsetTop != top || articles[7].offsetTop == top) {
      sevenPerRow = false;
    }
  }

  if (sevenPerRow) {
    setupGame();
    startGame();
  } else if (gameOn) {
    quitGame();
  }
}

function setupGame() {
  gameOn = true;

  let section = document.getElementById("vente-article");
  let articles = section.children;

  for (let i=0; i<42; i++) {
    articles[i].classList.add("vente-seven-row");
    articles[i].setAttribute("onclick", "update(gameBoard, " + i%7 + ")");
  } 
}

function quitGame() {
  gameOn = false;

  let section = document.getElementById("vente-article");
  let articles = section.children;

  for (let i=0; i<42; i++) {
    articles[i].classList.remove("vente-seven-row");
    articles[i].removeAttribute("onclick", "update(gameBoard, " + i%7 + ")");
    articles[i].style.backgroundColor = "#444";  
  } 
}

function startGame() {
  playerTurn = "1";
  gameBoard = [
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0"]
]
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function update(board, column) {
  updateBoard(board, column, "1");

  drawPieces(board);
  let win = checkWinningCondition(board);
  if (win == "1") {
    console.log("amogus 1");
    return;
  } else if (win == "2") {
    console.log("amogus 2");
    return;
  }

  await sleep(1000);

  let col = getBestMove(copyBoard(board));
  updateBoard(board, col, "2");
  drawPieces(board);
  win = checkWinningCondition(board);
  if (win == "1") {
    console.log("amogus 1");
    return;
  } else if (win == "2") {
    console.log("amogus 2");
    return;
  }
};


