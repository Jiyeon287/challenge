function resetGameStatus(){
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML =
    'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  }

  resetGameStatus();

  gameAreaElement.style.display = "block";
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver === true) {
    return;
  }

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please");
    return;
  }
  selectedField.textContent = players[activePlayer].symbol; // 초기값 players[0]
  event.target.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  const winnerId = checkWin();
  console.log(winnerId);
  if(winnerId != 0){
    endGame(winnerId);
  }

  currentRound++;
  switchPlayer();
}

// 승리 여부 확인 함수
function checkWin(player) {
  // 가로, 세로 검사
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][1] === gameData[i][0] &&
      gameData[i][2] === gameData[i][0]
    ) {
      return gameData[i][0];
    }

    if (
      gameData[0][i] > 0 &&
      gameData[1][i] === gameData[0][i] &&
      gameData[2][i] === gameData[0][i]
    ) {
      return gameData[0][i];
    }
  }

  // 대각선 검사
  if (
    gameData[0][0] > 0 &&
    gameData[1][1] === gameData[0][0] &&
    gameData[2][2] === gameData[1][1]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[0][2] > 0  &&
      gameData[1][1] === gameData[0][2] &&
      gameData[2][0] === gameData[1][1]
  ) {
    return gameData[0][2];
  }

  if (currentRound === 9){
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';

    if(winnerId > 0){
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;

    }else {
        gameOverElement.firstElementChild.textContent = 'It\'s a draw!'
    }
}
