//for
for(let i=0; i<=10; i++){
    console.log(i);
}

//for-of
const users = ['jiyeon', 'eunji', 'yoonji'];
for(const user of users){
    console.log(user);
}

//for-in
const userInfo = {
    name : 'jiyeon',
    age : 29,
    isAdmin: true
}

for(const userProperty in userInfo){
    console.log(userProperty);
}

let isFinished = false;

//while
//확인 알림을 띄우고 예라고 선택하면 끝나는 로직
while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
}

console.log('while문 끝남')


