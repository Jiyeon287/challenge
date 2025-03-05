let age = 32;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = { 
    title: "Developer", 
    place: "New York", 
    salary: 50000 
};

alert(hobbies[0]);
alert(job.title);

function countAge(){
    return age + 18;
}

alert(countAge());

let onlineCourse = {
    name:'Node.js project',
    price:50000,
    goals: ['Learn HTML&CSS','Learn Java Script','Lean Node.js']
};

function getListItem(array, arrayIndex){
    let arrayElement = array[arrayIndex];
    return arrayElement;
}

alert(getListItem(onlineCourse.goals,1));

//메소드
let person = {
    name: 'Max', //객체
    greet() { //함수
        alert('Hello!'); 
    }
};

person.greet();

//log
console.log('js 끝!');

