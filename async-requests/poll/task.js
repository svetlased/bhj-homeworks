let xhr = new XMLHttpRequest();
const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();


xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200){
        let resp = JSON.parse(xhr.responseText);
        let question = resp.data.title;
        let answerPoll = resp.data.answers;   
        let idN = resp.id;
        let count = 0;

        title.insertAdjacentHTML("afterbegin", `${question}`);

        for (let answer in answerPoll) {
            answers.insertAdjacentHTML('beforeend',
            `</button>
            <button class="poll__answer" data-vote="${count}">
            ${answerPoll[answer]}
            </button>`);
            count++;
        };

        let buttons = document.querySelectorAll(".poll__answer");

        buttons.forEach(button => button.addEventListener("click", event => {
            event.preventDefault();
            alert("Спасибо, ваш голос засчитан!");
            let xhrPost = new XMLHttpRequest();
            xhrPost.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
            xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
            xhrPost.send( 'vote=1${idN}&answer=${button.dataset.vote}');

            
            xhrPost.onreadystatechange = function() {
                if (xhrPost.readyState === 4 && xhr.status === 200) {
                    let xhrPostAnswers = JSON.parse(xhrPost.responseText).stat;
                    answers.innerHTML = "";

                    let sum = 0;
                    xhrPostAnswers.forEach(answer => {
                        sum += answer.votes;
                    });

                    xhrPostAnswers.forEach(answer => {
                        answers.insertAdjacentHTML('beforeend', 
                        `<div>${answer.answer}: ${(answer.votes / sum * 100).toFixed(2)}%</div>`);
                    });
                }
        }
    }));
    }
}