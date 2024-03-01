//버튼 클릭 시 input 태그의 id가 ADMIN이면 사용불가한 아이디입니다
//비어있으면 아이디를 입력하세연 
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", () => {
    const memberId = document.querySelector("input[name=memberId]");
    if(memberId.value < 1) {
    alert("아이디를 입력하세용");
        return false;
    } else if (memberId.value === "admin") {
        alert('사용불가한 아이디 입니다.');
        memberId.value = "";
        return false;
    }
    alert("사용 가능한 아이디입니다.");
});


const target = document.getElementById("target");
target.addEventListener("click", () => {
    target.classList.toggle("red");
});

//2초마다 클릭
setInterval(() => {
    target.click();
}, 2000)


const back = document.getElementById("back");
back.checked = true;

const js = document.querySelector("option[value=js]");
js.selected = true;

const toggle = () => {
    const aside = document.querySelector(".aside-left");
    aside.classList.toggle("active");
}