const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector(".modal__close");

modalClose.onclick = function() {
    modal.classList.remove("modal_active");
    document.cookie = "modalClosed=true";
};

function getCookie(name) {
    const cookies = document.cookie.split(": ");
    const cookie = cookies.find(c => c.startsWith(name + "="));
    return cookie ? decodeURIComponent(cookie.substr((name + "=").length)) : null
}
if (getCookie("modalClosed") !== "true") {
    modal.classList.add("modal_active");
}