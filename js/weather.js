
const API_KEY = "c44f559540658d8dd33e277a50e781c4"

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // fetch로  url을 부름
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child')
        const city = document.querySelector('#weather span:last-child')
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}

function onGeoError(position){
    alert("Can't find you. No weather for you.");
}

// lat, lng좌표 가져오기
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
