// console.log("로딩 끝");

// const f1 = (a, b) => {
//     this.name = a;
//     this.hp = b;
//     this.attack = () => {
//         console.log("공격~!~!~!~!");
//     }
// }
// const result = f1("빅가츄", 100);
// console.log(result);
// ----------------------------------------

// class Person {
//     name = "";
//     age = 26;
//     speak() {
//         console.log("말");
//     }
// }

// const my1 = new Person();
// const my2 = new Person();
// console.log(my1.speak());
const obj = count();
obj.printCount(); //123
// Closure - scope 개념을 알고있으면 ok(누군가 기억하고 있으면 데이터가 사라지지 않음 )
function count() {
    const count = 0;
    const obj = {};
    obj.printCount = function () {
        console.log(count);
    }
    return obj;
}

