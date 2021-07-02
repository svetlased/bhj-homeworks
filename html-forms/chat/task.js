const widget = document.querySelector('.chat-widget__side');
const chat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
let messsges = document.querySelector('.chat-widget__messages');

widget.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
    setTimeout(timer, 30000);
})
const timer = () => {
    messsges.innerHTML += `
		    <div class="message">
		    <div class="message__time">${new Date().toTimeString().slice(0,5)}</div>
            <div class="message__text"> Ну, что, я пошла курить? Долго ты думаешь...</div>
            </div>`
    }

input.addEventListener("keyup", (evt) => {
    clearTimeout(timer, 30000);
    if (evt.key === "Enter" && input.value !== "") {
        messsges.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${new Date().toTimeString().slice(0,5)}</div>
            <div class="message__text">${input.value}</div>
            </div>`

        input.value = '';
        //используя высоту прокрутки, мы можем получить высоту окна чата 
        //и постоянно удерживать прокрутку вниз в окне чата
        

        messsges.innerHTML += `
		    <div class="message">
		    <div class="message__time">${new Date().toTimeString().slice(0,5)}</div>
            <div class="message__text">${robot_texts_answer[Math.floor(Math.random() * 10)]}</div>
            </div>`
        let field = document.querySelector(".chat-widget__messages-container");
        let xH = field.scrollHeight;
        field.scrollTo(0, xH);

    }
})

const robot_texts_answer = [
    "Здравствуйте, меня зовут Мария, я продолжу консультацию по данному вопросу.",
    "Приношу свои извинения за длительное ожидание ответа.",
    "Вы готовы продолжить диалог?",
    "Если у Вас появятся вопросы - просто напишите нам",
    "Обращение закрыто",
    "Оставайтесь на связи, Ваше обращение очень важно для нас",
    "У Вас есть другие вопросы по работе Портала Госуслуг?",
    "Ох, не знаю, гражданочка, это ваши личные трудности", 
    "Добрый день и Вам! Так какой вопрос у Вас?",
    "Просим подождать еще минутку"
]