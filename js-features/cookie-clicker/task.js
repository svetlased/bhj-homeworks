const image = document.getElementById("cookie");

image.onclick = function() {
    if (image.width === 200) {
        image.width += 20; 
    } else if (image.width = 220) {
        image.width -= 20;
    }
    const counter = document.getElementById("clicker__counter");
    counter.textContent = parseInt(counter.textContent) + 1;
}
