const a = !true;
console.log(a); //false

const b = !false;
console.log(b); //true

const a = true && true;
console.log(a); //ture

let f = false && false; //false
f = false && true;  //false
f = true && false;  //false

let t = true || false;  //true
t = false || true;  //true
t = true || true;   //true
let f = false || false; //false

//논리 연산자 순서  NOT -> AND -> OR 

//비교연산자

const a = 1;
const b = 1;
const equals = a === b;     //두 값이 일치하는지 검사
console.log(equals);


const a = 1;
const b = 1;
const equals = a == b;      // =을 2개만 써도 되지만 3개 쓸 것
console.log(equals);


const value = 'a' !== 'b';  //일치하지 않는지 검사
const value = 'a' != 'b';  //똑같이 =을 2개만 써도 되지만 3개 쓸 것



//비교 
const a = 10;
const b = 15;
const c = 15;

console.log(a < b); // true
console.log(b > a); // true
console.log(b >= c); // true
console.log(a <= c); // true
console.log(b < c); // false;


//문자열 붙이기 

const a = '안녕';
const b = '하세요';
console.log(a + b); // 안녕하세요
