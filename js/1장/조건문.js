// if 문

const a = 1;
if (a + 1 === 2) {
    console.log('a + 1 이 2 입니다.');
}

// if (조건) {
//     코드;
// }


const a = 1;
if (true) {
    const a = 2;          //다른 블록 범위에서는 똑같은 이름으로 선언 할 수도 있음
    console.log('if문 안의 a 값은 ' + a); //2
}
console.log('if문 밖의 a 값은 ' + a);   //1