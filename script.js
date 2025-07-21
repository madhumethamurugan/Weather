const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
    if(todoInput.value == ''){
        alert("Input any task");
    }
    else{
        //add the task entered in todoInput
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";

        const removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.innerHTML = "×";

        removeBtn.addEventListener("click", () => {
            todoList.removeChild(listItem);
        })

        const taskText = document.createElement("span");
        taskText.innerHTML = todoInput.value;
        taskText.className = "task-text";

        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(removeBtn);

        todoList.appendChild(listItem);
        todoInput.value = '';
    }
})