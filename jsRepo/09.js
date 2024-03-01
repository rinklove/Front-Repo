const create = () => {
    const x = document.createTextNode("gogogo");
    const result = document.getElementById("result");
    result.appendChild(x);
}

//이거다 내가 하고 싶었던거
const f2 = () => {
    const h1 = document.createElement('h1');
    const text = document.createTextNode("ㅎㅇㅇ")
    h1.append(text);
    const result = document.getElementById("result");
    result.appendChild(h1);
}

const f3 = () => {
    const h1 = document.querySelectorAll("#result > h1");
    h1[0].remove();
}