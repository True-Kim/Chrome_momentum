const bgColor = document.querySelector("div#back-color")
const bgImage = document.querySelector("img#bgImage");
const images = ["Gryffindor.jpg", "Huffulpuff.jpg", "Ravenclaw.jpg", "Slyderin.jpg"]
const chosenImage = images[Math.floor(Math.random() * images.length)];
const DORM_KEY = "dormitory"

if (matchMedia("screen and (min-width:760px").matches){
    bgImage.src = `img/pc/${chosenImage}`;
} else{
    bgImage.src = `img/m/${chosenImage}`;
}

function setDormitory(){
    if (chosenImage === "Gryffindor.jpg"){
        const dorm = "Gryffindor" 
        localStorage.setItem(DORM_KEY, dorm);
    } else if (chosenImage === "Huffulpuff.jpg"){
        const dorm = "Huffulpuff"
        localStorage.setItem(DORM_KEY, dorm);
    } else if (chosenImage === "Ravenclaw.jpg"){
        const dorm = "Ravenclaw"
        localStorage.setItem(DORM_KEY, dorm);
    } else {
        const dorm = "Slyderin"
        localStorage.setItem(DORM_KEY, dorm);
    }
}
