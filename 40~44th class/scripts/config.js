function openPlayerConfig() {
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
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



}