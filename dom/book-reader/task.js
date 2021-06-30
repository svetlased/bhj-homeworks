let fontSize = document.querySelectorAll(".font-size");
let content = document.querySelector("#book");

fontSize.forEach(elem => elem.addEventListener("click", function(evt){
    document.querySelector(".font-size_active").classList.remove("font-size_active");
    evt.currentTarget.classList.add("font-size_active");
    evt.preventDefault();
    if (evt.currentTarget.dataset.size){
        let sizeClassName = "book book_fs-" + evt.currentTarget.dataset.size;
        content.className = sizeClassName;
    } else {
        content.className = "book";
    }
}))