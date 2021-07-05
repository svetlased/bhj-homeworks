let taskList = document.querySelector("#tasks__list");
let task_add = document.querySelector("#tasks__add");
let task_input = document.querySelector("#task__input");

task_add.addEventListener("click", (event) =>{
    event.preventDefault();
    if (task_input.value !== "") {
        toAdd();
    } 
})
   
task_input.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (task_input.value !== "" && event.key == "enter") {
        toAdd();
        
    }
    
})


function toAdd() {
    taskList.insertAdjacentHTML('afterbegin', `<div class="task">
        <div class="task__title">
            ${task_input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div>`);
        task_input.value = "";
    document.querySelector("a.task__remove").addEventListener("click",(event) => {
        event.target.parentElement.remove();
    })

}
