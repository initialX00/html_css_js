let userDatas = {
    id: 1,
    username: "",
    password: "",
};

function setInputsEvent() {
    const usernameInput = document.querySelector(".input-box:nth-of-type(1) > input");
    const passwordInput = document.querySelector(".input-box:nth-of-type(2) > input");
    usernameInput.onkeyup = handleRegister;
    passwordInput.onkeyup = handleRegister;
}

function handleRegister(e) {
    userDatas = {
        ...userDatas,
        [e.target.name]: e.target.value,
    }
}

function setButtonEvent() {
    const clickButton = document.querySelector(".button-box");
    clickButton.onclick = saveDatas;
}

function saveDatas() {
    let save = !!localStorage.getItem("save")
    ? JSON.parse(localStorage.getItem("save"))
    : [];

    if(save.length > 0) {
        userDatas.id = save[save.length -1].id + 1;
    }

    save = [
        ...save,
        userDatas,
    ]

    localStorage.setItem("save", JSON.stringify(save));

    alert("회원가입 성공. 로그인페이지로 이동합니다");

    location.href = "./pagelogin.html";
}

function pageMove() {
    const clickmove = document.querySelector(".link-sign");
    clickmove.onclick = move;
}

function move() {
    location.href = "./pagelogin.html";
}

pageMove();
setInputsEvent();
setButtonEvent();