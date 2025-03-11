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




