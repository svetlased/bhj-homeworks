'use strict';

const button = document.querySelector(".btn");
const signin = document.querySelector("div.signin");
const welcome = document.getElementById("welcome");
//добавить загрузку
if (localStorage.userId){
    welcome.classList.add('welcome_active');
	document.getElementById("user_id").innerText = localStorage.userId;
} else {
    signin.classList.add("signin_active");
}

button.addEventListener("click", event =>{
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let form = new FormData(document.getElementById("signin__form"));
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.addEventListener("readystatechange", () => {

            const response = JSON.parse(xhr.responseText);
            if (response.success === false){
                alert("Неверный логин/пароль");
            } else {
                localStorage.setItem("userId", response.user_id);
                welcome.classList.add("welcome_active");
                signin.classList.remove("signin_active");
                document.getElementById("user_id").innerText = localStorage.userId;
            }
        xhr.send(form);

    })});

document.getElementById("signout_button").addEventListener("click", () => {
    welcome.classList.remove("welcome_active");
    signin.classList.add("signin_active");
});

