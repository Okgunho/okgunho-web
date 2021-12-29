
//객체는 우리가 변수 혹은 상수를 사용하게 될 때 
//하나의 이름에 여러 종류의 값을 넣을 수 있게 해줍니다.
const dog = {
    name: '멍멍이',
    age: 2
};

console.log(dog.name);
console.log(dog.age);
//멍멍이
//2

//-----------------------------------

// 객체 선언 
// 키: 원하는 값
// 키에 해당하는 부분은 공백이 없어야 함
// 단 공백이 있어야 하는 상황이면 이를 따옴표로 감싸서 
// 문자열로 넣어주면 됨
const sample = {
    'key with space': true
};

//-------------------------------------

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

console.log(ironMan);
console.log(captainAmerica);

//------------------------------

// 함수에서 객체를 파라미터로 받기

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor                                             //템플릿 리터럴 
        } 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);
//아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.
//캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다.

//---------------------------------

// 객체 비구조화 할당
// 이 문법은 "객체 구조 분해" 라고 불리기도 합니다.

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

function print(hero) {
    const { alias, name, actor } = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);


//더 깔끔하게 


const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

function print({ alias, name, actor }) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);

//--------------------------------

// 객체 안에 함수 넣기

const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say: function say() {
        console.log(this.sound);  //this는 자기가 속한 객체
    }
};

dog.say();
// 멍멍!

// 함수 이름이 없어도 괜찮음
// 단 화살표 함수는 안됨

const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say: function () {
        console.log(this.sound);
    }
};

dog.say();
// 위와 같음

//-----------------------------------

// 객체 안의 값이 변경 가능
const numbers = {
    a: 1,
    b: 2
};

numbers.a = 5;
console.log(numbers);

//---------------------------------

const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b;
    }
};

console.log(numbers.sum); // 3
numbers.b = 5;
console.log(numbers.sum); // 6

//--------------------------------------

// 이해 안됨 나중에 하자
const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        console.log('a가 바뀝니다.');
        this._a = value;
        this.calculate();
    },
    set b(value) {
        console.log('b가 바뀝니다.');
        this._b = value;
        this.calculate();
    }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);