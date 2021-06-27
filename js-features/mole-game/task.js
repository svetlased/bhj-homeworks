const holes = document.querySelectorAll("div.hole");
let countLost = document.getElementById("lost");
let countWin = document.getElementById("dead");
let maxCountTotal = 9;

holes.forEach(hole => hole.onclick = function(){
    if (this.classList == "hole hole_has-mole") {
        Number(countWin.textContent) += 1;
    } else {
        Number(countLost.textContent) += 1;
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
