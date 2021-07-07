const linkToTip = document.getElementsByClassName("has-tooltip");
let tooltip = document.querySelector(".tooltip");

for ( let i = 0; i < linkToTip.length; i++) {
    linkToTip[i].addEventListener("click", (event) => {
        event.preventDefault();
        tooltip.classList.contains("tooltip_active") ? tooltip.classList.remove("tooltip_active") : tooltip.classList.add("tooltip_active")
        tooltip.innerText = event.target.title;
        let linkToTipPosit = event.target.getBoundingClientRect();
        let tooltipPosit = tooltip.getBoundingClientRect()
        tooltip.style.top = linkToTipPosit.top + 20 + "px";
        tooltip.style.left = linkToTipPosit.left + "px";
        event.target.after(tooltip);
        if (linkToTipPosit.top > 20) {
            tooltip.style.top = (linkToTipPosit.top - tooltipPosit.height - 5) + "px";
            tooltip.style.left = linkToTipPosit.left + "px";
        }
    })  

}
      