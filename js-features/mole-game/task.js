const holes = Array.from(document.querySelectorAll("div.hole"));
let countLost = document.getElementById("lost").textContent;
let countWin = document.getElementById("dead");
let maxCountTotal = 9;

for(let i = 0; i < holes.length; i++) {
    holes[i].onclick = function(){
        if (this.classList == "hole hole_has-mole") {
            countWin++;
        } else {
            countLost++;
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
    }
}
