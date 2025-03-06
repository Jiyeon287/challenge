
//해당 요소를 가져오고, 실행하고자 하는 함수를 만들고, 이벤트를 듣고 있다가 발생하면 해당 함수 실행시킴
//예시 1 : click 이벤트가 발생하면 글자가 바뀜
let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
    console.log('clicked!');
}
paragraphElement.addEventListener('click', changeParagraphText);

//예시 2 : input 박스에 쓰는 값을 콘솔에 남김
let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    // let enteredText = inputElement.value;
    let enteredText = event.target.value; //작성된 글전체를 들고옴
    let enteredText2 = event.data; //작성하는 글자하나를 들고옴
    console.log(enteredText);
}
inputElement.addEventListener('input', retrieveUserInput);



