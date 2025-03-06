console.log(window);

//DOM : Document Object Model

// console.log(window.document);
console.log(document);
console.dir(document);

// document.body.children[1].children[0].href = 'https://google.com';

//가져오는 방식 1
let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

//가져오는 방식 2
anchorElement = document.querySelector('p a');
anchorElement.href = 'https://www.naver.com';

//new 
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://youtube.com';
newAnchorElement.textContent = 'This leads to Google!';
let firstParagraph = document.querySelector('p');
firstParagraph.append(newAnchorElement);


//delete
let firstH1Element = document.querySelector('h1');
firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element);

//move
firstParagraph.parentElement.append(firstParagraph);

//innerHTML
// firstParagraph.textContent = 'Hi! This is <strong>important!</strong>';
firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';





