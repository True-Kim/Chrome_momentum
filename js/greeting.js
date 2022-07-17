const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const toDoForm = document.querySelector("#todo-form");
const link = document.querySelector('a');
const greeting = document.querySelector('#greeting');
const greetingIcon = document.querySelector('#wizard-hat');
let dormitory = localStorage.getItem(DORM_KEY);

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    setDormitory()
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username, dormitory);
    RemoveIcon();
}

function paintGreetings(username, dormitory){
    RemoveIcon();
    dormitory = localStorage.getItem(DORM_KEY);
    greeting.innerText = `${username}, Welcome to ${dormitory}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    bgImage.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    player.classList.remove(HIDDEN_CLASSNAME);
}

function RemoveIcon(){
    greetingIcon.classList.remove("block");
    greetingIcon.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
    bgColor.classList.remove(HIDDEN_CLASSNAME);
    bgImage.classList.add(HIDDEN_CLASSNAME);
} else {
    setDormitory()
    paintGreetings(savedUsername);
    bgColor.classList.add(HIDDEN_CLASSNAME);
    bgImage.classList.remove(HIDDEN_CLASSNAME);
}
