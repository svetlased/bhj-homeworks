let loader = document.getElementById('loader');
let items = document.getElementById('items');
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        loader.classList.remove("loader_active");
        let response = JSON.parse(xhr.responseText).response.Valute;

        for (let item in response) {
			//Можно использовать свойство textContent для вставки простого текста, DocumentFragment, или создавать элементы через createElement().
            items.insertAdjacentHTML("beforeBegin", `
				<div class="item">
					<div class="item__code">
						${response[item].CharCode}
					</div>
					<div class="item__value">
						${response[item].Value}
					</div>
					<div class="item__currency">
						руб.
					</div>
				</div>`)
        }
    }
}