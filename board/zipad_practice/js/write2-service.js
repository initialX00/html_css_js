let noteInputData = {
    id: 0,
    title: "",
    content: "",
    writer: "",
}

function setInput() {
    const titleInput = document.querySelector(".title");
    const contentInput = document.querySelector(".content");
    const writerInput = document.querySelector(".writer");
    titleInput.onkeyup = inputSystem;
    contentInput.onkeyup = inputSystem;
    writerInput.onkeyup = inputSystem;
}

function inputSystem(event) {
    noteInputData = {
        ...noteInputData,
        [event.target.name]: event.target.value,
    }
}

function  setButton() {
    const saveButton = document.querySelector(".save-button");
    saveButton.onclick = setOnClick;
}

function setOnClick() {
    saveNote();
    clear();
}

function clear() {
    const titleInput = document.querySelector(".title");
    const contentInput = document.querySelector(".content");
    const writer = document.querySelector(".writer");
    const inputs = [titleInput, contentInput, writer];
    inputs.forEach(input => input.value = "");

    noteInputData = {
        title: "",
        content: "",
        writer: "",
    }
}


function saveNote() {
    let noteDatas = !!localStorage.getItem("noteDatas")
    ? JSON.parse(localStorage.getItem("noteDatas"))
    : [];

    if(noteDatas.length > 0) {
        noteInputData.id = noteDatas[noteDatas.length - 1].id +1;
    } else {
        noteInputData.id = 1;
    }

    noteDatas = [
        ...noteDatas,
        noteInputData,
    ]

    localStorge.setItem("noteDatas", JSON.stringify(noteDatas));

    alert("작성완료");

    location.href = "./list2.html"
}


setInput();
setButton();