const elements = document.querySelectorAll("ul.menu_sub");
const countElem = elements.length;
// Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link

elements.forEach(element => element.onClick = function() {
    this.closest("ul").classList.add("menu_active");
    this.querySelector("a.menu__link").onclick = function(evt) {
        evt.preventDefault();
    }
});