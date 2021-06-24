let cross = document.getElementsByClassName("modal__close");
cross.onClick = function(evt) {
    evt.target.closest(".modal").removeClass(".modal_active");
}
let success = document.getElementsByClassName("show-success");
success.onClick = function(){
    this.idProperty = "modal_success";
    evt.target.closest(".modal").removeClass(".modal_active");
}