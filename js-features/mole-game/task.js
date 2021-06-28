const holes = document.querySelectorAll("div.hole");
let countLost = document.getElementById("lost");
let countWin = document.getElementById("dead");
let got = 0;
let missed = 0;
let maxCountTotal = 9;

holes.forEach(hole => hole.onclick = function(e){
    if (e.target.classList == "hole hole_has-mole") {
        got++;
        countWin.textContent = got;
    } else {
        missed++;
        countLost.textContent = missed;
    } 
    if(countLost.textContent === maxCountTotal) {
        alert("Вы проиграли!")
        countLost = 0; 
        countWin = 0;
    } else if (countWin.textContent === maxCountTotal) {
        alert("Вы выйграли");
        countLost = 0; 
        countWin = 0;
    }
})
