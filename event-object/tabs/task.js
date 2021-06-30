const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach(function(tab){
    let count = tabs.indexOf(tab);
    tab.addEventListener("click", function(){
        if(tab.classList.contains("tab_active")) {
            tab.classList.remove("tab_active");
            tabsContent[count].classList.remove("tab__content_active");
        } else {
            tab.classList.add("tab_active");
            document.querySelector('.tab__content_active').classList.remove('tab__content_active');
            tabsContent[count].classList.add("tab__content_active");
        }
})
})
