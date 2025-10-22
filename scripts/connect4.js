function copyBoard(board) {
  const newBoard = [
    ["0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0"]
  ]

  for (let i = 0; i< width; i++) {
    for (let j = 0; j < height; j++) {
      newBoard[i][j] = board[i][j];
    }
  }

  return newBoard;
};

function inputFromConsole() {
	var input = parseInt(prompt("Entre une colonne: (1, 7)"));
	if (input > 0 && input < 8) {
		return input-1
	}
};

function inputPlay(board, turn) {
	let input = inputFromConsole();
	updateBoard(board, input, turn);
}

function updateBoard(board, column, turn) {
	let row = getLowestCellInColumn(board, column);
	if (row == -1) {
		return;
	}
	board[column][row] = turn;
};

function getLowestCellInColumn(board, column) {
	let i = 0;
	while (board[column][i] == 0 && i < 6) {
		i++;
	}
	return i-1;
};

function checkWinningCondition(board) {
	for (let row = 0; row < height-3; row++) {
		for (let col = 0; col < width; col++) {
			if (board[col][row] == board[col][row+1] && 
				board[col][row+1] == board[col][row+2] && 
				board[col][row+2] == board[col][row+3] && 
				board[col][row] != "0") {
				return board[col][row];
			}
		}
	}

	for (let row = 0; row < height; row++) {
		for (let col = 0; col < width-3; col++) {
			if (board[col][row] == board[col+1][row] && 
				board[col+1][row] == board[col+2][row] && 
				board[col+2][row] == board[col+3][row] && 
				board[col][row] != "0") {
				return board[col][row];
			}
		}
	}

	for (let row = 0; row < height-3; row++) {
		for (let col = 0; col < width-3; col++) {
			if (board[col][row] == board[col+1][row+1] && 
				board[col+1][row+1] == board[col+2][row+2] && 
				board[col+2][row+2] == board[col+3][row+3] && 
				board[col][row] != "0") {
				return board[col][row];
			}
		}
	}

	for (let row = height-1; row > 2; row--) {
		for (let col = 0; col < width-3; col++) {
			if (board[col][row] == board[col+1][row-1] &&
				board[col+1][row-1] == board[col+2][row-2] && 
				board[col+2][row-2] == board[col+3][row-3] && 
				board[col][row] != "0") {
				return board[col][row];
			}
		}
	}

	return "0";
};

function drawPieces(board) {
	let section = document.getElementById("vente-article");
  	let articles = section.children;
  	for (let row = 0; row < height; row++) {
		for (let col = 0; col < width; col++) {
			let index = col + 7*(row);
			if (board[col][row] == "0") {
				articles[index].style.backgroundColor = "#444";
			} else if (board[col][row] == "1") {
				articles[index].style.backgroundColor = "#ff3";
			} else {
				articles[index].style.backgroundColor = "#f33";
			}
		}
	} 
};
