// 생성자 함수로 사용
// function Person (x,y) {
//     this.name = x;
//     this.age = y;
// }

// Person.prototype.hello = () => {
//     console.log(`hell'o(부모)`);
// };

// const p1 = new Person("ee", 10);
// console.log(p1)
// p1.hello();
// console.log(p1.__proto__); {}
// console.log(Person.prototype); {}

//클래스

class Person {

    constructor(x,y) {
        this.name = x;
        this.age = y;
    }

    hello() {
        console.log("생성자 밖에 있는 함수");
    }
}

const p1 = new Person("Lee Junho", 24);
console.log(p1);
p1.hello();

class Programmer extends Person{
    constructor(x,y,z) {
        super(x,y);
        this.lang = z;
    }

    hello() {
        console.log("hello");
    }

    coding() {
        console.log('코딩중');
    }
}

const p2 = new Programmer("Lee Junho", 24, "backend");
console.log(p2);
p2.hello();
p2.coding();