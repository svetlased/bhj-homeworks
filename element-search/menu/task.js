const elements = document.querySelectorAll("ul.menu_sub");
const countElem = elements.length;
// Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link
for (let i = 0; i < countElem; i++) {
    elements[i].onClick = function() {
    this.closest("ul").classList.add("menu_active");
    return false;
}
}
