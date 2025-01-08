function timeRun() {
    const phoneTime = document.querySelector(".timer");
    setInterval(() => {
        const now = new Date();
        const nowHour = now.getHours();
        const nowMinute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const nowTime = `${nowHour} : ${nowMinute}`;
        phoneTime.innerHTML = nowTime;
    }, 1000);
}

timeRun();