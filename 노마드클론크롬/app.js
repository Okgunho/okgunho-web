let today = "날먹";  // let 은 변경 가능 ㅇㅋㅇㅋ?
console.log(today);

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