const a = 1;
const b = 2;
const sum = a + b;

//이걸 함수로 

function add(a, b) {
    return a + b;       //return을 쓰면 끝난다.
}

const sum = add(1, 2);
console.log(sum);

//-----------------------------

function add(a, b) {
    return a + b;
    console.log('호출이 되지 않는 코드!')
}

const sum = add(1, 2);
console.log(sum);

//-------------------------------

//연습

function hello(name) {
    console.log('Hello, ' + name + '!');
}
hello('velopert');
// Hello, velopert!

// ES6의 템플릿 리터럴 
function hello(name) {
    console.log(`Hello, ${name}!`);
}
hello('velopert');

//-----------------------------------

// 점수
function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score === 89) {
        return 'B+';
    } else if (score >= 80) {
        return 'B';
    } else if (score === 79) {
        return 'C+';
    } else if (score >= 70) {
        return 'C';
    } else if (score === 69) {
        return 'D+';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

const grade = getGrade(90);
console.log(grade);

//--------------------------------

// 화살표 함수
// function 대신 => 문자를 사용
const add = (a, b) => {
    return a + b;
};

console.log(add(1, 2));

// 이렇게 줄여 쓸 수 있음
const add = (a, b) => a + b;
console.log(add(1, 2));
