let frases = Array.from(document.querySelectorAll(".reveal"));
window.onload = function(){
    var isInViewport = function(element) {
        const viewportHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
	    const elementBottom = element.getBoundingClientRect().bottom;
	    return elementTop < viewportHeight && elementBottom > 0 ? true : false;
}


window.onscroll = function() {
    for( let i =0; i < frases.length; i++) {
        if(isInViewport(frases[i])) {
            frases[i].classList.add("reveal_active");
        } else {
            frases[i].classList.remove("reveal_active");
        }
}
}
}