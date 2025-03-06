let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemaingChars(event){
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    //하드코딩
    // let remaingChars = 60 - enteredTextLength;
    let remaingChars = maxAllowedChars - enteredTextLength;
    console.log(enteredTextLength);
    remainingCharsElement.textContent = remaingChars;

}

productNameInputElement.addEventListener('input', updateRemaingChars);