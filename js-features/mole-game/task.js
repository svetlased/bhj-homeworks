const hole = Array.from(document.querySelectorAll("div.hole"));
function catch() {
    deactivateHole(getHole( index ));
}

hole.forEach(function(item){
    item.onClick = catch;
})

if (item.onClick === hole.classList.contains('hole_has-mole')) {
    const deadMole = document.getElementById("dead");
    deadMole.textContent = parseInt(deadMole.textContent)+1;
} else {
    const lostMole = document.getElementById("lost");
    lostMole.textContent = parseInt(lostMole.textContent)+1;
}
