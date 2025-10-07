(function () {

  const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  const boardElement = document.getElementById('tictactoe-board');
  const resetButton = document.getElementById('reset-button');

  class Player {
    constructor(name, symbol) {
      this.name = name;
      this.symbol = symbol;
    }
  }
  const player1 = new Player('Jogador 1', 'X');
  const player2 = new Player('Jogador 2', 'O');
  let currentPlayer = player1;

  function switchPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
  function checkWin() {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === currentPlayer.symbol && board[i][1] === currentPlayer.symbol && board[i][2] === currentPlayer.symbol) {
        return true; // Vitória na linha
      }
      if (board[0][i] === currentPlayer.symbol && board[1][i] === currentPlayer.symbol && board[2][i] === currentPlayer.symbol) {
        return true; // Vitória na coluna
      }
    }
    if (board[0][0] === currentPlayer.symbol && board[1][1] === currentPlayer.symbol && board[2][2] === currentPlayer.symbol) {
      return true; // Vitória na diagonal
    }
    if (board[0][2] === currentPlayer.symbol && board[1][1] === currentPlayer.symbol && board[2][0] === currentPlayer.symbol) {
      return true; // Vitória na diagonal
    }
    return false;
  }

  function makeMove(row, col) {
    if (board[row][col] === '') {
      board[row][col] = currentPlayer.symbol;
      if (checkWin()) {
        alert(`${currentPlayer.name} (${currentPlayer.symbol}) venceu!`);
        resetGame();
      } else {
        switchPlayer();
      }
    }
  }

  function resetGame() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = '';
      }
    }
    currentPlayer = player1;
  }

  function updateBoard() {
    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellElement = boardElement.querySelector(`[data-row='${rowIndex}'][data-col='${colIndex}']`);
        if (cellElement) {
          cellElement.textContent = cell;
        }
      });
    });
  }

  function createBoard() {
    boardElement.innerHTML = '';

    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellElement = document.createElement('div');
        cellElement.dataset.row = rowIndex;
        cellElement.dataset.col = colIndex;
        boardElement.appendChild(cellElement);
      });
    });
  }

  boardElement.addEventListener('click', (event) => {
    // event.target é o elemento exato que foi clicado (o 'div' da célula)
    const clickedCell = event.target;

    if (clickedCell.dataset.row !== undefined) {
      const rowIndex = clickedCell.dataset.row;
      const colIndex = clickedCell.dataset.col;

      makeMove(rowIndex, colIndex);
      updateBoard();
    }
  });

  resetButton.addEventListener('click', () => {
    resetGame();
    updateBoard(); // Apenas limpa o texto das células
  });


  function initializeGame() {
    createBoard();
    // updateBoard();
  }

  initializeGame();

})(); // Fim da IIFE