let xhr = new XMLHttpRequest();
let title = document.getElementById("poll__title");
let answers = document.getElementById("poll__answers");

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();


xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.DONE){
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
        }

        let buttons = document.querySelectorAll(".poll__answer");

        buttons.forEach(button => button.addEventListener("click", event => {
            event.preventDefault();
            alert("Спасибо, ваш голос засчитан!");
            let xhrPost = new XMLHttpRequest();
            xhrPost.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
            xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
            xhrPost.send( 'vote=1${idN}&answer=${element.dataset.vote}' );

            
            xhrPost.onreadystatechange = function() {
                if (xhrPost.readyState === 4 && xhr.DONE) {
                    let xhrPostAnswers = JSON.parse(xhrPost.responseText).stat;
                    answers.innerHTML = "";
                    
                    for (let answer in xhrPostAnswers) {
                        answers.insertAdjacentHTML('beforeend',
                            `<div>${xhrPostAnswers[answer].answer}: ${xhrPostAnswers[answer].votes}</div>`
                        )
                    }
                }
            }

        }));
}
}