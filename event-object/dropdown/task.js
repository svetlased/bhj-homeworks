let dropdown = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
let links = document.querySelectorAll(".dropdown__link");

dropdown.addEventListener("click", function(evt){
    if (!list.classList.contains('dropdown__list_active')) {
        list.classList.add('dropdown__list_active');
        evt.preventDefault();
    } else {
        list[0].classList.remove('dropdown__list_active');
        evt.preventDefault();
    }
});
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(evt){
        dropdown.textContent = links[i].textContent;
        list.classList.remove("dropdown__list_active")
        evt.preventDefault();
        
    })
}