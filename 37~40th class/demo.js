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

}

productNameInputElement.addEventListener('input', updateRemaingChars);