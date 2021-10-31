const a = 1;
const b = 2;
const sum = a + b;

//이걸 함수로 

function add(a, b) {
    return a + b;       //return으로 끝낸다.
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
// 값 : Hello, velopert!

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
