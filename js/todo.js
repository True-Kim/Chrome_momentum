const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    // 브라우저 기능인 JSON.stringify()를 이용하면 ()의 모든 것을 string으로 바꿔줌.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(li.id)
    li.remove();
    console.log(typeof li.id)
    // filter 지우고 싶은 item을 제외
    // parseInt 숫자로 바꿔주는 함수
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❎";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // forEach() each item 각각에 대해 ()안의 함수를 실행함.
    // => Arrow function
    parsedToDos.forEach(paintToDo); 
}