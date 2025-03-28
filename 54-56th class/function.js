function greetUser(userName = 'user') {
    console.log('Hi ' + userName);
}

greetUser('Max');
greetUser();

function sumUp(num1, num2, num3){
    return num1 + num2 + num3;
}

console.log("sumUp : " + sumUp(1,2));

function sumUp2(num1, num2, num3 = 0){
    return num1 + num2 + num3;
}

console.log("sumUp2 : " + sumUp2(1,2));

function sumUp3(numbers){
    let result = 0;

    for (const number of numbers){
        result += number;
    }

    return result;
}

console.log("sumUp3 : " + sumUp3([1,2]));

function sumUp4(...numbers){
    let result = 0;

    for (const number of numbers){
        result += number;
    }

    return result;
}

console.log("sumUp4 : " + sumUp4(1,2));

function sumUp5(...numbers){
    let result = 0;

    for (const number of numbers){
        result += number;
    }

    return result;
}

const inputNumbers = [1,2,3,4,5]

console.log("sumUp5 : " + sumUp5(...inputNumbers));

