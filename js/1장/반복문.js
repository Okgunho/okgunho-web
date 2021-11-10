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

//--------------------------

// 객체를 위한 반복문 for...in
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

// Object.entries: [[키, 값], [키, 값]] 형태의 배열로 변환
// Object.keys: [키, 키, 키] 형태의 배열로 변환
// Object.values: [값, 값, 값] 형태의 배열로 변환

// 객체가 지니고 있는 값에 대하여 반복을 하고 싶다면 
// 위 함수들을 사용해도 되고, for...in 구문을 사용해도 된다.

const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
}

//----------------------------------------

for (let i = 0; i < 10; i++) {
    if (i === 2) continue; // 다음 루프를 실행
    console.log(i);
    if (i === 5) break; // 반복문을 끝내기
}

//-----------------------------------------

function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

//15

//-------------------------------------------

//퀴즈

function biggerThanThree(numbers) {
    const p = [];
    for (let i = 0; i < numbers.length; i++)
        if (numbers[i] > 3) {
            p.push(numbers[i]);
        }

    return p;

}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]