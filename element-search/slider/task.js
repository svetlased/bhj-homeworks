let activeItem = document.querySelectorAll(".slider__item_active")

function slideRight(){
    this.className = "slider__item";
    if (this.nextSibling) {
        this.nextSibling.className.toggle("slider__item_active");
    } else {
        document.querySelector("slider__item") = "slider__item slider__item_active";
    } 
}
function slideLeft(){
    this.className = "slider__item";
    if (this.previousSibling) {
        this.previousSibling.className ="slider__item slider__item_active";
    } else {
        document.querySelectors("slider__items").lastChild = "slider__item slider__item_active";
    } 
}

activeItem.forEach(item => item.addEventList("click", slideRight));
activeItem.forEach(item => item.addEventList("click", slideLeft));
