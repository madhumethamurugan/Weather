const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const addBtn = document.getElementById("add-btn");

window.addEventListener("load", () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.forEach(todoTask => {
        addToTodoList(todoTask.text, todoTask.completed);
    })
})

addBtn.addEventListener("click", () => {
    if(todoInput.value == ''){
        alert("Input any task");
    }
    else{
        addToTodoList(todoInput.value, false);
        todoInput.value = '';
        saveTodos();
    }
})

function addToTodoList(task, isCompleted){
    //add the task entered in todoInput
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = isCompleted;

    checkbox.addEventListener("change", () => {
        saveTodos();
    })

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.innerHTML = "×";

    removeBtn.addEventListener("click", () => {
        todoList.removeChild(listItem);
        saveTodos();
    })

    const taskText = document.createElement("span");
    taskText.innerHTML = task;
    taskText.className = "task-text";

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(removeBtn);

    todoList.appendChild(listItem);
}

function saveTodos(){
    const tasks = [];
    document.querySelectorAll("#todo-list li").forEach(item => {
        const text = item.querySelector(".task-text").textContent;
        const completed = item.querySelector(".task-checkbox").checked;
        tasks.push({ text, completed });
    })
    localStorage.setItem("todos",JSON.stringify(tasks));
}