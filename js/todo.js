const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const deleteList = event.target.parentElement;
    deleteList.remove();
}

function paintToDo(newTodo){
    const newList = document.createElement("li");
    const newSpan = document.createElement("span");
    const button = document.createElement("button");
    newSpan.innerHTML=newTodo;
    button.innerHTML="X";
    button.addEventListener("click", deleteToDo);
    newList.appendChild(newSpan);
    newList.appendChild(button);
    toDoList.appendChild(newList);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem("todos");
if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach((item) => paintToDo(item));
}