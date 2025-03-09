const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemaingChars(event){
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    //하드코딩
    // let remaingChars = 60 - enteredTextLength;
    const remaingChars = maxAllowedChars - enteredTextLength;
    console.log(enteredTextLength);
    remainingCharsElement.textContent = remaingChars;


    //if문 추가
    if(remaingChars === 0) {
        remainingCharsElement.classList.add('error');
        productNameInputElement.classList.add('error');
    }else if(remaingChars <= 10){
        remainingCharsElement.classList.remove('error');
        productNameInputElement.classList.remove('error');
        remainingCharsElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
    }else{
        remainingCharsElement.classList.remove('warning');
        productNameInputElement.classList.remove('warning');
    }

    //참과 거짓
    let isPresent = true;
    if(isPresent){ //Boolean값은 자체가 조건문에 사용가능, ! 추가도 가능
        console.log('true!');
    }
    const testStr = 'ssss';

    if(testStr){ //String값은 내용이 있으면 참, 띄어쓰기도 참, 아예 빈값이나 상수 0은 거짓을 의미
        console.log('testStr is ' + testStr);
    }

}

productNameInputElement.addEventListener('input', updateRemaingChars);