const timer = document.getElementById("timer");
const ourTimer = function() {
    timer.textContent -= 1;
}

setInterval(ourTimer, 100);
if (Number.parseInt(timer.textContent) === 0) {
    clearInterval(ourTimer);
    alert("Вы победили в конкурсе!");
}