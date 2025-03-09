// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
const firstButton = document.querySelector('button');
const secondButton = document.getElementById('second-button');

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
// //버튼에서 꺼내기
// function clickButton1() {
//     console.dir(firstButton);
// }

// //event에서 꺼내기
// function clickButton2(event) {
//     console.dir(event.target);
// }

// firstButton.addEventListener('click', clickButton1);
// secondButton.addEventListener('click', clickButton2);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
let firstParagraphs = document.body.children[2].children[1];
console.log(firstParagraphs);
let thirdParagraphs = firstParagraphs.nextElementSibling.nextElementSibling;
console.log(thirdParagraphs);

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
function removeThirdParagraph() {
    thirdParagraphs.remove();
}

function changeFirstParagraph(event) {
    //직접 css 변경
    // firstParagraphs.style.backgroundColor = 'blue';

    //css에 클래스를 추가하고 그 클래스를 해당요소에 추가
    firstParagraphs.className = 'blue-bg';
}

firstButton.addEventListener('click', removeThirdParagraph);
secondButton.addEventListener('click', changeFirstParagraph);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!