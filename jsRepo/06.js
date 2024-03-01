
const f01 = () => {
    //객체 생성
    //객체는 key - value 형태로 저장
    const object = {
        name: "피카츄"
        , hp: 2000
        , atk: 30
        , skill: () => {
            console.log(`${object.name} 공격~!~!~!`);
        }
    };
    console.log(object); //{name: 'lee junho', hp: 2000, atk: 30}
    console.log(object.skill()); //undefined => 리턴값이 없어서
    
}
// f01();

const f02 = () => {
    const x = {};
    console.log(x);
    
    x.name = "사과";
    x.price = 50000;
    console.log(x);
    
    x["name"] = "바나나";
    x["price"] = 5000;
    console.log(x);
};
// f02();

//반복문
const f03 = () => {
    const x = {
        name: '갤럭시s21',
        price: 800000,
        brand: "삼성",
        color: "phantom violet"
    };

  for (const key in x) {
    if (Object.hasOwnProperty.call(x, key)) {
        const element = x[key];
        console.log(element); //value 값만 출력
    }
  }
};
// f03();

//속성 추가 & 제거
const f04 = () => {
    const x = {
        name: '갤럭시s21',
        price: 800000,
        brand: "삼성",
        color: "phantom violet"
    };
    console.log(x);
    delete(x.price); //삭제
    console.log(x);
}
f04();

//객체배열
const f05 = () => {
    const student01 = {name: "이준호", score: 100};
    const student02 = {name: "삼준호", score: 100};
    const student03 = {name: "사준호", score: 100};
    const student04 = {name: "오준호", score: 100};
    const student05 = {name: "육준호", score: 100};
    const student06 = {name: "칠준호", score: 100};
    const student07 = {name: "팔준호", score: 100};

    const students = [student01,student02,student03,student04,student05,student06,student07];
    for (const indexOf in students) {
        if (Object.hasOwnProperty.call(students, indexOf)) {
            const element = students[indexOf]["name"];
            console.log(element);
        }
    }

};
f05();