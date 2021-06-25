const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));
function turnOn(event) {
    this.indexOf(event.target).className = "tab__content tab__content_active";
}

tabs.forEach(tab => tab.addEventListener("click", function(){this.classList.add("tab_active")
}))
tabsContent.forEach(tabContent => tabContent.addEventListener("click", turnOn))