const content = document.querySelector("textarea");
const clear = document.querySelector("button");

content.addEventListener("keyup", () => {
    localStorage.setItem("text", content.value);
})
content.value = localStorage.getItem("text");

clear.addEventListener("click", event =>{
    localStorage.removeItem("text");
    content.value = "";
})