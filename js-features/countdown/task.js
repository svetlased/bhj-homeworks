const timer = document.getElementById("timer");
const ourTimer = function() {
    timer.textContent -= 1;
    if (timer.textContent < 0) {
        clearInterval(ourTimer);
        alert("Вы победили в конкурсе!");
    }
}
setInterval(ourTimer, 100);