const player = document.querySelector("div#player")

if(savedUsername === null){
    player.classList.add(HIDDEN_CLASSNAME)
} else {
    player.classList.remove(HIDDEN_CLASSNAME)
}