const depth = 5;

function aiMove(board, turn) {}
function playMove(board, col, turn) {
	updateBoard(board, col, turn);
	return board;
}
function getBestMove(board) {
	let bestMove = -1;
	let bestEvaluation = -600;
	for (let col = 0; col < 7; col ++) {
		if (board[col][0] == "0") {
			let evaluation = search(depth, playMove(copyBoard(board), col, "2"), "2");
			if (evaluation > bestEvaluation) {
				bestEvaluation = evaluation;
				bestMove = col;
			}
		}
	}

	return bestMove;
}
function search(d, board, turn) {
	if (d == 0) {
		return evaluateBoard(board, true);
	}

	let e = evaluateBoard(board, false);
	if (e != 0) {
		return e;
	}

	let newBoard = copyBoard(board);
	if (turn == "1") {
		turn = "2";
	} else {
		turn = "1";
	}

	if (turn == "1") {
		let minEval = 600;
		for (let col = 0; col < 7; col++) {
			if (board[col][0] == "0") {
				let updatedBoard = playMove(copyBoard(board), col, turn);
				let e = search(d-1, copyBoard(updatedBoard), turn)
				if (minEval > e) {
					minEval = e;
				}
			} 
		}
		return minEval;

	} else {
		let maxEval = -600;
		for (let col = 0; col < 7; col++) {
			if (board[col][0] == "0") {
				let updatedBoard = playMove(copyBoard(board), col, turn);
				let e = search(d-1, updatedBoard, turn)
				if (maxEval < e) {
					maxEval = e;
				}
			} 
		}
		return maxEval;
	}
}
function evaluateBoard(board, full) {
	const columnCoefficients = [0.1, 0.1, 0.4, 0.7, 0.4, 0.1, 0.1];

	let win = checkWinningCondition(board);
	if (win == "1") {
		return -500;
	} else if (win == "2") {
		return 500;
	}

	let score = 0;

	if (full) {
		// checks lines of three
		let redLines = getNumberOfThrees(board, "2");
		let yellowLines = getNumberOfThrees(board, "1");
		score = (redLines - yellowLines) * 5;

		// checks how centered pieces are
		for (let row = 0; row < height; row++) {
			for (let col = 0; col < width; col++) {
				if (board[col][row] == "1") {
					score -= columnCoefficients[col];
				} else if (board[col][row] == "2") {
					score += columnCoefficients[col];
				}
			}
		}
	}


	return score;
}
function getNumberOfThrees(board, turn) {
	let lines = 0;

	for (let row = 0; row < height-2; row++) {
		for (let col = 0; col < width; col++) {
			if (board[col][row] == board[col][row+1] && 
				board[col][row+1] == board[col][row+2] && 
				board[col][row] == turn) {
				lines += 1;
			}
		}
	}

	for (let row = 0; row < height; row++) {
		for (let col = 0; col < width-2; col++) {
			if (board[col][row] == board[col+1][row] && 
				board[col+1][row] == board[col+2][row] && 
				board[col][row] != turn) {
				lines += 1;
			}
		}
	}

	for (let row = 0; row < height-2; row++) {
		for (let col = 0; col < width-2; col++) {
			if (board[col][row] == board[col+1][row+1] && 
				board[col+1][row+1] == board[col+2][row+2] && 
				board[col][row] != turn) {
				lines += 1;
			}
		}
	}

	for (let row = height-1; row > 3; row--) {
		for (let col = 0; col < width-2; col++) {
			if (board[col][row] == board[col+1][row-1] &&
				board[col+1][row-1] == board[col+2][row-2] && 
				board[col][row] != turn) {
				lines += 1;
			}
		}
	}

	return lines;
}
