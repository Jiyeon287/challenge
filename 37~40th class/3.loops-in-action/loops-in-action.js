// const button = document.getElementById('calculated-sum-button');
//calculator id를 가진 section의 button
const buttonElement = document.querySelector('#calculator button')

function calculataSum(){
    const userNumber = document.getElementById('user-number');

    //다른 객체는 상수로 받아도 되는데 for에 사용되는건 let 사용해야함
    let sumNumber = 0;
    for(let i=0; i<=userNumber.value; i++){
        sumNumber = sumNumber + i;
    }
    const sumParagraph = document.getElementById('calculated-sum');
    sumParagraph.textContent = sumNumber;
    //중요~!
    sumParagraph.style.display = 'block';
}


buttonElement.addEventListener('click', calculataSum);


////////////////////////////////////////////////////////////////////////////

const buttonElemen2 = document.querySelector('#highlight-links button')

function changeToBoldAtHerf(){


    const hrefInParagraphList = document.querySelectorAll('#highlight-links a');

    for(const hrefInParagraph of hrefInParagraphList) {
        hrefInParagraph.classList.add('highlight');
    }


}

buttonElemen2.addEventListener('click', changeToBoldAtHerf);

//////////////////////////////////////////////////////////////////////////////
const buttonElemen3 = document.querySelector('#user-data button');

function getData(){

    const dummyUserData = {
        firstName: 'jiyeon',
        lastName: 'Kim',
        age : 29
    };

    const userDataUlElement = document.getElementById('output-user-data');

    //이걸 추가하는 이유는 클릭을 몇번이고 해도 값을 초기화한다음에 li를 넣어야하기 때문(이걸 넣지 않으면 초기화되지 않고 같은 값이 계속 추가됨)
    userDataUlElement.innerHTML = '';

    for(const userDataKey in dummyUserData) {
        console.log(userDataKey);
        //일단 원하는 값을 만들자
        const outputText = userDataKey.toUpperCase() + ': ' + dummyUserData[userDataKey];
        //ul내에 li요소를 만들자
        const newLiElement = document.createElement('li');
        //li에 값을 넣자
        newLiElement.textContent = outputText;
        //우리가 원래 추가하려고 했던 Ul 요소에 li요소를 추가하자
        userDataUlElement.append(newLiElement);
    }
}

buttonElemen3.addEventListener('click', getData);

//////////////////////////////////////////////////////////////////////////////
const buttonElemen4 = document.querySelector('#statistics button');

//주사위를 굴리는 함수
function rollTheDice(){
    return Math.floor(Math.random() * 6) +1; //random() -> 0~1사이의 무작위 숫자 floor() -> 소수점 떼고 반내림한 수
}

//같은 수가 나올 확률을 구하는 함수
function deriveNumberForDice(){

    //타겟 넘버
    const targetNumberElement = document.getElementById('user-target-number');
    const targetNumber = targetNumberElement.value;

    //실제로 주사위를 1번씩 굴렸을 때 결과 List(ul)
    const diceRollsListElement = document.getElementById('dice-rolls');
    diceRollsListElement.innerHTML = '';

    let isSameRolledTargetNumber = false;

    let countRoll = 0;

    //주사위를 굴리면서 같은 값 찾는 while문
    while(!isSameRolledTargetNumber){
        //true인 경우 while 돌다가 내부에서 true가 나오면 조건문은 false가 되기 때문에 끝남
        const rolledNumber = rollTheDice();
        // if(rolledNumber == targetNumber) hasRolledTargetNumber = true;
        isSameRolledTargetNumber = rolledNumber == targetNumber;
        countRoll++;

        const newRollListElement = document.createElement('li');
        const rollListOutput = 'Roll ' + countRoll + ": " + rolledNumber;
        newRollListElement.textContent = rollListOutput;
        diceRollsListElement.append(newRollListElement);

    }

    //output 작성
    const totalCountRollElement = document.getElementById('output-total-rolls');
    totalCountRollElement.textContent = countRoll;
    const outPutTargetNumberElement = document.getElementById('output-target-number');
    outPutTargetNumberElement.textContent = targetNumber;


}

buttonElemen4.addEventListener('click', deriveNumberForDice);
