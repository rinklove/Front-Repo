const f1 = () => {
    //open
    // window.open("https://google.com", "abc", "width=500, height=600");   //탭 열면서 연결할 링크, 연결한 화면의 별칭

    //setTimeout
    // window.setTimeout(동작, 시간(단위: ms));
    // window.setTimeout(() => {
    //     alert("3초 타이멍");
    // }, 3000);

    //setInterval()
    // window.setInterval(동작, 주기)
    // window.setInterval(() => {
    //     console.log('2초 지남');
    // }, 2000)


    //open + timeout()
    const abcTab = window.open("https://naver.com", "abc");
    
    const timer = window.setTimeout((/*콜백함수*/) => {
        abcTab.close()
    }, 3000);   
    // timer;
    //타이머 삭제
    // clearTimeout(timer);

    // clearInterval(인터벌);
    //콜백함수: 나중에 실행 될 함수(Intervel은 콜백함수 아님)
}

const f2 = () => {
    console.log(location);
    //페이지 이동
    // location.href = "https://naver.com";
    //새로고침
    location.reload();
}

const f3 = () => {
    console.log(history);
    // 이전 페이지로 이동하기
    history.back();
    // 앞으로 이동하기
    history.forward();
    //n개 페이지 이동, 음수는 이전, 양수는 앞으로
    history.go(n);
}

const f4 = () => {
    console.log(navigator);
}
f4();

const f5 = () => {
    console.log(screen);
}
f5();