let userDatas = {
    username: "",
    password: "",
};

function setInputsEvent() {
    const usernameSet = document.querySelector(".input-box:nth-of-type(1) > input");
    const passwordSet = document.querySelector(".input-box:nth-of-type(2) > input");
    usernameSet.onkeyup = handleRegister;
    passwordSet.onkeyup = handleRegister;
}


function handleRegister(e) {
    userDatas = {
        ...userDatas,
        [e.target.name]: e.target.value,
    }
    setButtonEvent();
}


function setButtonEvent() {
    const loginbutton = document.querySelector(".button-box");
    loginbutton.onclick = loadLogin;
}


function loadLogin() {
    let save = !!localStorage.getItem("save")
    ? JSON.parse(localStorage.getItem("save"))
    : [];
    
    save.filter(data => data.username === userDatas.username)
        .map(data => {
            if(userDatas.username === data.username) {
                if(userDatas.password === data.password) {
                    alert("로그인 성공")
                } else {
                    alert("로그인 실패")
                }
            } else {
                alert("로그인 실패")
            }
        }

    );
}

function pageMove() {
    const clickmove = document.querySelector(".link-login");
    clickmove.onclick = move;
}

function move() {
    location.href = "./pagesign.html";
}

setInputsEvent();
pageMove();