// 배열 선언
const array = [1, 2, 3, 4, 5];

//--------------------------

// 객체 배열

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

//-------------------------

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

console.log(objects);   // 조회
console.log(objects[0]);
console.log(objects[1]);

//--------------------------

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

// 배열에 새항목 추가
objects.push({
    name: '멍뭉이'
});

console.log(objects);

//---------------------------------

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

console.log(objects.length);    //2

objects.push({
    name: '멍뭉이'
});

console.log(objects.length);  //3     // 배열 크기 알아내기



