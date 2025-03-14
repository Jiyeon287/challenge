function openPlayerConfig(event) {
  editedPlayer = event.target.dataset.playerid;  // 1 or 2
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  //유효성 검사, 데이터를 변경(서버로 전송하는 것은 아니고 사이트의 메타데이터를 변경)
  event.preventDefault();
  //객체 인스턴스화
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('playername').trim();

  //html에서 required를 js로 변환가능
  if(!enteredPlayername) { // enteredPlayername === ''
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;
  }

  //오버레이의 이름 -> 사이트의 이름 반영
  const updatePlayerDataElement = document.getElementById('player-' + editedPlayer + '-data'); //동적으로 선택
  updatePlayerDataElement.children[1].textContent = enteredPlayername; // PLAYER NAME

  players[editedPlayer -1].name = enteredPlayername; //배열은 0,1이고 player는 1,2기 때문에

  closePlayerConfig();

}