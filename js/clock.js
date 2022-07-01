const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello, 5000); // 매 초마다 실행
//setTimeout(sayHello, 5000); // 표시까지 기다릴 시간
getClock();
setInterval(getClock, 1000);
