// for each
// 기존에 배웠던 for 문을 대체 시킬 수 있습니다.

// for each 사용
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(hero => {
    console.log(hero);
});

// forEach 함수의 파라미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어줍니다.
// 이 함수의 파라미터 hero는 각 원소를 가르키게 됩니다.

// 이렇게 함수형태의 파라미터를 전달하는 것을 콜백함수 라고 부릅니다. 
// 함수를 등록해주면, forEach 가 실행을 해주는 거죠.

//--------------------------------------------

// map

// map 은 배열 안의 각 원소를 변환 할 때 사용 되며, 
// 이 과정에서 새로운 배열이 만들어진다.

// 배열 안의 모든 숫자를 제곱해서 새로운 배열을 만들고 싶다면 어떻게 해야 할까?
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
for (let i = 0; i < array.length; i++) {
    squared.push(array[i] * array[i]);
}

console.log(squared);

// for each 사용 

const array = [1, 2, 3, 4, 5, 6, 7, 8];

// 이 함수의 파라미터 n은 각 원소를 가르키게 됩니다.
array.forEach(n => {
    squared.push(n * n);
});
console.log(squared);

// map 사용

// map 함수의 파라미터로는 변화를 주는 함수를 전달해준다. 
// 이를 변화함수라고 부르도록 하겠다.
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;
// 변화함수 square는 파라미터 n을 받아 제곱한다.
const squared = array.map(square);
console.log(squared);

// 변화 함수를 꼭 이름을 붙여서 선언 할 필요는 없다. 
// 코드를 다음과 같이 작성해도 된다.
const squared = array.map(n => n * n);
console.log(squared);

//-----------------------------------

// indexOf
