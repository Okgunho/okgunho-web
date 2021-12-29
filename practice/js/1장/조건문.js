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

//-------------------------------------------------------

//if - else 문

const a = 10;
if (a > 15) {
    console.log('a 가 15 큽니다.');
} else {
    console.log('a 가 15보다 크지 않습니다.');
}
// a가 15보다 크지 않습니다.

//--------------------------------------------------------

//if - else if 문

const a = 10;
if (a === 5) {
    console.log('5입니다!');
} else if (a === 10) {
    console.log('10입니다!');
} else {
    console.log('5도 아니고 10도 아닙니다.');
}
// 10입니다!

// -------------------------------------------------------

// swich case 문

const device = 'iphone';

switch (device) {
    case 'iphone':
        console.log('아이폰!');
        break;
    case 'ipad':
        console.log('아이패드!');
        break;
    case 'galaxy note':
        console.log('갤럭시 노트!');
        break;
    default:
        console.log('모르겠네요..');
}
