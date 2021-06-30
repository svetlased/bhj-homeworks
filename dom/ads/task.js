'use strict'

let cases = Array.from(document.getElementsByClassName("rotator__case"));
let activeCase = document.querySelector(".rotator__case_active")
let time = cases[0].dataset.speed; //как менять

changeStyle();

const timer = setInterval(() => {
    let activeCase = document.querySelector(".rotator__case_active")
    activeCase.classList.remove("rotator__case_active");
    if (activeCase.nextElementSibling) {
        activeCase.nextElementSibling.classList.add("rotator__case_active");
    } else {
        cases[0].classList.add("rotator__case_active");
    }
    changeStyle();
}, activeCase.dataset.speed);
function changeStyle(){
    for (let i = 0; i < cases.length; i++) {
        cases[i].style.color = cases[i].dataset.color;
    }
}