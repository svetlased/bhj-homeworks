let dropdown = document.getElementsByClassName("dropdown__value").textContent;
let toMakeActive = document.getElementsByClassName("dropdown__list");
let toClose = document.getElementsByClassName("dropdown__list dropdown__list_active");

//разворачивание списка
toMakeActive.addEventListener("click", function(){
    this.classList.add("dropdown__list_active");
});
// функция сворачивания
function closing() {
    toClose.classList.remove("dropdown__list_active");
}


toClose.addEventListener("click", closing);

document.querySelector("li.dropdown__item").addEventListener("click", function() {
    closing;
    this.textContent = dropdown;
    this.querySelector("a.dropdown__link").addEventListener("click", preventEvent);
})