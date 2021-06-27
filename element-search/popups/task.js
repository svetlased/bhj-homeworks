window.onload = function() {
    document.getElementById("modal_main").classList.add("modal_success");
}

let cross = document.getElementsByClassName("modal__close");
cross.forEach(elem => elem.onclick = function() {
    this.closest(".modal").classList.remove(".modal_active");
});

let success = document.getElementsByClassName("show-success");
success.forEach(elem => elem.onclick = function(){
    this.classList.add("modal_success");
    this.closest(".modal").classList.remove(".modal_active");
})