let progress = document.getElementById("progress");
let form = document.getElementById("form");
progress.value = 0;




form.addEventListener("submit", (event) => {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.onprogress = (event) => {
        progress.value = event.loaded / event.total;
    }
    xhr.upload.onloadend = function() {
        progress.value = 1;
        alert( 'Данные полностью загружены на сервер!' )
    }
    xhr.upload.onerror = function() {
        alert( 'Произошла ошибка при загрузке фаила на сервер!' );
      }
    
    xhr.send(new FormData(form));
})