const f2 = () => {
    console.log("f02 called...");
}

//defer와 같은 역할(고전)
window.onload = () => {

};

document.getElementById("btn03").addEventListener("click", () => {
    console.log("f03 called...");
});

document.getElementById("btn01").onclick = () => {
    console.log("f01 called...");
};

const f04 = () => {
    alert("할줄 알았냐?ㅋ");
    return false;
}

const f05 = () => {
    const memberId = document.querySelector("input[name=memberId]");
    const memberPwd = document.querySelector("input[name=memberPwd]");
    const memberPwd2 = document.querySelector("input[name=memberPwd2]");
    const memberNick = document.querySelector("input[name=memberNick]");

    if(memberId.value.length < 1) {
        alert(`아이디는 필수입니다`);
        return false;
    }
    if(memberPwd.value.length < 1) {
        alert(`비밀번호는 필수입니다`);
        return false;
    }
    if(memberPwd.value != memberPwd2.value) {
        alert(`비밀번호와 확인란이 다릅니다.`);
        return false;
    }
    if(memberNick.value.length < 1) {
        alert(`닉네임은 필수입니다`);
        return false;
    }
    alert(`${memberId.value}`);
    return true;
}