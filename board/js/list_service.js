function loadList() {
    let boardDatas = !!localStorage.getItem("boardDatas")
    ? JSON.parse(localStorage.getItem("boardDatas"))
    : [];

    const boardList = document.querySelector(".board-list-container");

    boardList.innerHTML = boardDatas.map(data => `
        <li class="board-box">
            <header class="board-header">
                <h1>${data.title}(${data.writer})</h1>
            </header>
            <main class="board-main">
                <pre>${data.content}</pre> 
            </main>
        </li>
        `).join("");
        //join은 생성된 문자열들을 하나의 문자열로 합친다.
        //아무것도 기입하지 않았기에 문자열 사이에 다른문자를 삽입하지 않고 합치기만한다.
        //pre태그는 줄바꿈이 적용된다
}

loadList();