const holes = Array.from(document.querySelectorAll("div.hole"));
let countLost = Number.parseInt(document.getElementById("lost").textContent);
let countWin = Number.parseInt(document.getElementById("dead"));
let maxCountTotal = 9;

holes.forEach(hole => hole.onclick = function(){
    if (this.classList == "hole hole_has-mole") {
        countWin.textContent += 1;
    } else {
        countLost.textContent += 1;
    }
    if (countLost === maxCountTotal) {
        alert("Вы проиграли!")
        countLost = 0; 
        countWin = 0;
    } else if (countWin === maxCountTotal) {
        alert("Вы выйграли");
        countLost = 0; 
        countWin = 0;
    }
})
