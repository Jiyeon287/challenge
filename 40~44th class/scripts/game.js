function startNewGame() {

    if(players[0].name === '' || players[1].name === ''){
        alert('Please set custom player names for both players!');
        return;
    }

    gameAreaElement.style.display = 'block';
    activePlayerNameElement.textContent = players[activePlayer].name;


}

function switchPlayer(){
    if (activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event){
    if(event.target.tagName !== 'LI') {
        return;
    }

    const selectedField = event.target;

    selectedField.textContext = players[activePlayer].symbol; // 초기값 players[0]
    console.log(event.target.name + players[activePlayer].symbol);
    event.target.classList.add('disabled');

    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData);
    switchPlayer();
}