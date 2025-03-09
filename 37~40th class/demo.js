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

}

productNameInputElement.addEventListener('input', updateRemaingChars);