const quotes = [
    {
        quote: "Time will not slow down when something unpleasant lies ahead.",
        author: "J.K. Rowling Harry Potter and the Goblet of Fire, Chapter 37"
    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black, Harry Potter and the Goblet of Fire, Chapter 27"
    },
    {
        quote: "It does not dwell on dreams and forget to live.",
        author: "Albus Dumbledore, Harry Potter and the Sorcerer's Stone, Chapter 12"
    },
    {
        quote: "Numbing the pain for a while will make it worse when you finally feel it.",
        author: "Albus Dumbledore, Harry Potter and the Goblet of Fire, Chapter 36"
    },
    {
        quote: "No good sittin' worryin' abou' it. What's comin' will come, and we'll meet it when it does.",
        author: "Rubeus Hagrid, Harry Potter and the Goblet of Fire, Chapter 37"
    },
    {
        quote: "It matters not what someone is born, but what they grow to be.",
        author: "Albus Dumbledore, Harry Potter and the Goblet of Fire, Chapter 36"
    },
    {
        quote: "To the well-organized mind, death is but the next great adventure.",
        author: "Albus Dumbledore, Harry Potter and the Sorcerer's Stone, Chapter 17"
    },
    {
        quote: "We are only as strong as we are united, as weak as we are divided.",
        author: "Albus Dumbledore, Harry Potter and the Goblet of Fire, Chapter 37"
    },
];

const phrase = document.querySelector("#phrase")
const quote = document.querySelector("#phrase span:first-child");
const author = document.querySelector("#phrase span:nth-child(2)");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;