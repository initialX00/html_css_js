function loadList() {
    let noteDatas = !!lacalStorage.getItem("noteDatas")
    ? JSON.parse(localStorage.getItem("noteDatas"))
    : [];

    const boardList = document.querySelector(".board-list");

    boardList.innerHTML = noteDatas.map(data =>
        `<li class="note-box">
            <header class="note-header>
                <h1>${data.title}(${data.writer})</h1>
            </header>
            <main class="note-main">
                <pre>${data.content}</pre>
            <main>
        </li>`
    ).join("");
}

loadList();