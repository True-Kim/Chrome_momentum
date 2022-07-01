const images = ["1.jpg", "2.jpg", "3.jpg"]
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img"); // js에서 html element를 만듦.

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage) // body안에 element를 보냄.