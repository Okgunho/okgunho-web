// 객체 생성자

function Anumal(type, name, sound) {
    this.type = type;
    this.name = name:
    this.sound = sound;
    this.say = function () {
        console.log(this.sound);
    };
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

// 객체 생성자를 사용 할 때는 보통 함수의 이름을 대문자로 시작하고, 
// 새로운 객체를 만들 때에는 new 키워드를 앞에 붙여주어야 합니다.

// 지금 위 코드를 보시면, dog 가 가지고 있는 say 함수와 cat 이 가지고
// 있는 수행하는 코드가 똑같음에도 불구하고 객체가 생성 될 때 마다 
// 함수도 새로 만들어져서 this.say 로 설정이 되고 있습니다.

// 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 
// 값을 재사용 할 수 있는데 바로 프로토타입입니다.


//-----------------------------------

// 프로토타입

// 프로토타입은 다음과 같이 객체 생성자 함수 아래에 
// .prototype.[원하는키] = 코드를 입력하여 설정 할 수 있습니다.

function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function () {
    console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);

// 멍멍
// 야옹
// 1
// 1

//----------------------------------

// 객체 생성자 상속받기

// 예를 들어서 우리가 Cat 과 Dog 라는 새로운 객체 생성자를 만든다고 가정해봅시다. 
// 그리고, 해당 객체 생성자들에서 Animal 의 기능을 재사용한다고 가정해봅시다. 
// 그렇다면, 이렇게 구현 할 수 있습니다.

function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function () {
    console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
}
Dog.prototype = Animal.prototype;

function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();

// 새로 만든 Dog 와 Cat 함수에서 Animal.call 을 호출해주고 있는데요,
// 여기서 첫번째 인자에는 this 를 넣어주어야 하고, 그 이후에는 Animal
// 객체 생성자 함수에서 필요로 하는 파라미터를 넣어주어야 합니다.

// 추가적으로 prototype 을 공유해야 하기 때문에 상속받은 객체 생성자
// 함수를 만들고 나서 prototype 값을 Animal.prototype 으로 설정해주었습니다.