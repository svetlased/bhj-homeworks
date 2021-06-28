const elements = Array.from(document.querySelectorAll(".menu__item"));

// Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link

for(let i = 0; i< elements.length; i++) {
    if (elements[i].querySelector(".menu_sub")){
        elements[i].querySelector(".menu__link").onclick = function() {
            elements[i].querySelector(".menu_sub").classList.toggle("menu_active")
            return false;
        };
    }
}