const timer = document.getElementById("timer");
const ourTimer = function() {
    Number.parseInt(timer.textContent) -= 1;
}

setInterval(ourTimer, 1000);
if (timer = 0) {
    clearInterval(ourTimer, 1000);
    alert("Вы победили в конкурсе!");
}