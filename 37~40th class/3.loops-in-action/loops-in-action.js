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




