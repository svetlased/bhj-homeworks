window.onload = function() {
    document.getElementById("modal_main").style.display = 'block';
}

let cross = document.getElementsByClassName("modal__close");
cross.onClick = function() {
    this.closest(".modal").removeClass(".modal_active");
}
let success = document.getElementsByClassName("show-success");
success.onClick = function(){
    this.idProperty = "modal_success";
    this.closest(".modal").removeClass(".modal_active");
}