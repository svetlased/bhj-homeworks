window.onload = function() {
    document.getElementById("modal_main").classList.add("modal_active");
}

let cross = Array.from(document.getElementsByClassName("modal__close"));
cross.forEach(elem => elem.onclick = function(e) {
    e.target.closest("div.modal").classList.remove("modal_active");
});

let success = Array.from(document.getElementsByClassName("show-success"));
success.forEach(elem => elem.onclick = function(e){
    e.target.closest("div.modal").classList.remove("modal_active");
    document.getElementById("modal_success").classList.add("modal_active");
})