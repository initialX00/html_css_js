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
        //pre태그느 줄바꿈이 적용된다 
}

loadList();