for (let i = 0; i < 10; i++) {
    console.log(i);
}

//--------------------

for (let i = 10; i > 0; i--) {
    console.log(i);
}

//----------------------

// 배열에 반복문 합치기
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//-----------------------

// While문

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//------------------------

// for .. of
// 배열에 관한 반복문을 돌리기 위한 반복문

let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
    console.log(number);
}