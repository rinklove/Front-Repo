//함수 선언만 함. 호출이 아님
const f01 = () => {
    arr1 = new Array();
    console.log(`arr1 = ${arr1}`);
    
    arr1 = new Array(4);
    console.log(`arr1 = ${arr1}`);

    arr1[0] = "핸드폰";
    arr1[1] = "페브리즈";
    arr1[2] = '결명자차';
    arr1[3] = '견과류';
    console.log(`arr1 = ${arr1}`);
    
    arr1[2] = 100;
    arr1[3] = {
        "이름": "이준호",
        "전화번호": "010-2652-5944"
    };
    console.log("arr1 = " + arr1);
    
    arr1= [];
    console.log("arr1 = " + arr1);
    
    arr1 = ["핸드폰", false, 100, {
        "이름": "이준호",
        "전화번호": "010-2652-5944"
    }, []];
    console.log("arr1 = " + arr1);
    
}

f01();


const f02 = () => {
    let arr = ["하나", "둘", "셋", "넷"];
    const x = arr.indexOf("파인애플");
    console.log(x); //-1

    arr = arr.concat(arr); 
    console.log(arr);
    
    let string = arr.join();
    console.log([...arr]);
    console.log(string);
    // console.log(string == [...arr] ); //true
    // console.log(string === [...arr] ); //false
    
    console.log(arr.reverse());
    
    console.log(arr.sort());

    arr.push("다섯");
    console.log(arr);
    
    let arrPop = arr.pop();
    console.log(arrPop);
    console.log(arr);
    
    arr.unshift("영");
    console.log(arr);
    
    let arrShift = arr.shift();
    console.log(arrShift);
    console.log(arr);

    console.log(arr.slice(2, 4)); //배열의 2번째 인덱스에서부터 4번째 전까지
    //첫번째 파라미터부터 2번째 파라미터의 인덱스까지의 데이터를 지운다음
    //세번쩨 파라미터의 데이터로 채운다(세번째 파라미터값 없으면 그냥 삭제)
    arr.splice(3, 4, ...arr); 
    console.log(arr);
}

f02();