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

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index); // 2

// 토르가 몇 번째 항복인지 알고 싶을 때

//-------------------------------------

// findindex

// 예를 들어서 다음과 같은 배열이 있다고 가정해봅시다.
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);

// 여기서 만약 id 가 3 인 객체가 몇번째인지 찾으러면, findIndex 
// 함수에 검사하고자 하는 조건을 반환하는 함수를 넣어서 찾을 수 있다.

// 결과는 2

//------------------------------------

// find

// find 함수는 findIndex 랑 비슷한데, 찾아낸 값이 몇번째인지 
// 알아내는 것이 아니라, 찾아낸 값 자체를 반환한다.

const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];

const todo = todos.find(todo => todo.id === 3);
console.log(todo);

// {id: 3, text: "객체와 배열 배우기", done: true}

//-------------------------------------------

// filter

// filter 함수는 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만든다. 
// 예를 들어서, 우리가 방금 만들었던 todos 배열에서 done 값이 false 인 항목들만 따로 
// 추출해서 새로운 배열을 만든다.

const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];

// const tasksNotDone = todos.filter(todo => !todo.done);
const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);

//결과 값

// [
//     {
//       id: 4,
//       text: '배열 내장 함수 배우기',
//       done: false
//     }
//   ];

//--------------------------------

// splice

// 배열에서 특정 항목을 지울 때 사용.

const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers);

// 결과 [ 10, 20, 40 ]

//-------------------------------------

// slice
//
