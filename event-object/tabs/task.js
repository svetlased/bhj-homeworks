const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach(function(tab){
    let count = tabs.indexOf(tab);
    tab.addEventListener("click", function(event) {
        for (let i = 0; i < tabs.length; i++) {
            if (tabs.indexOf(event.target) == i) {
                tabs[i].classList.add('tab_active');
                tabsContent[i].classList.add('tab__content_active');
            } else {
                tabs[i].classList.remove('tab_active');
                tabsContent[i].classList.remove('tab__content_active');
            }
        }
})
})
