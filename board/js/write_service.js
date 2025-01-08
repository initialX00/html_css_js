let boardInputDatas = {
    id: 0,
    title: "",
    content: "",
    writer: "",
};

function setInputsEvent() {
    const titleInput = document.querySelector(".main-article > input:nth-of-type(1)");
    const contentInput = document.querySelector(".main-article > textarea");
    const writerInput = document.querySelector(".main-article > input:nth-of-type(2)");
    titleInput.onkeyup = handleBoardInputOnChange;
    contentInput.onkeyup = handleBoardInputOnChange;
    writerInput.onkeyup = handleBoardInputOnChange;
}

function handleBoardInputOnChange(e) {
    boardInputDatas = {
        ...boardInputDatas,
        [e.target.name]: e.target.value, //입력된 키 밸류 값 입력
    }
    //console.log(`${e.target.name}, ${e.target.value}`);
    //console.log(boardInputDatas);
}




function setButtonEvent() {
    const submitButton = document.querySelector(".write-submit-button");
    submitButton.onclick = handleSubmitOnClick; //저장 클릭 시 작동
} 


function handleSubmitOnClick() {
    saveBoard();
    clear(); //화면에 입력된 값 제거
} 

function clear() {
    const titleInput = document.querySelector(".main-article > input:nth-of-type(1)");
    const contentInput = document.querySelector(".main-article > textarea");
    const writerInput = document.querySelector(".main-article > input:nth-of-type(2)");
    const inputs = [ titleInput, contentInput, writerInput ];
    inputs.forEach(input => input.value = ""); //순회하며 입력된 값 제거

    boardInputDatas = { //람다식은 실제 값에 적용 안되므로 실적용값 재입력
        title: "",
        content: "",
        writer: "",
    };
} 

function saveBoard() {
    let boardDatas = !!localStorage.getItem("boardDatas")  //getItem : value값 불러오기
        ? JSON.parse(localStorage.getItem("boardDatas"))
        : []; //글 저장
        //JSON으로 키밸류를 문자열로 저장
        //html - f12 - 애플리케이션 - 로컬스토리지에 저장됨

    if(boardDatas.length > 0 ) {
        boardInputDatas.id = boardDatas[boardDatas.length - 1].id + 1;
    } //게시판 아이디 부여시 길이보다 1크게 저장

    boardDatas = [ //글 여러개를 저장하기 위해 배열 생성
        ...boardDatas,
        boardInputDatas,
    ]

    localStorage.setItem("boardDatas", JSON.stringify(boardDatas));

    alert("게시글 작성 완료");

    location.href = "./list.html"; //location은 객체의 URL에 관한 정보를 담는다.
}


setInputsEvent();
setButtonEvent();