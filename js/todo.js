const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const deleteList = event.target.parentElement;
    // console.log(deleteList.id);
    deleteList.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteList.id));
    saveToDos();
}

function paintToDo(newTodo){
    const newList = document.createElement("li");
    newList.id = newTodo.id;
    const newSpan = document.createElement("span");
    const button = document.createElement("button");
    newSpan.innerHTML=newTodo.text;
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
    const newTodoObj = {text: newTodo, id: Date.now(),};
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem("todos");
if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}