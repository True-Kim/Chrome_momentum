const quotes = [
    {
        quote: "성숙하다는 것은 다가오는 모든 생생한 위기를 피하지 않고 마주하는 것을 의미한다.",
        author: "프리츠 쿤켈"
    },
    {
        quote: "양측의 의견을 모두 듣기 전에는 결정을 내리지 마라.",
        author: "포킬리데스"
    },
    {
        quote: "발견은 준비된 사람이 맞딱뜨린 우연이다.",
        author: "알베르트 센트죄르지"
    },
    {
        quote: "행복하게 여행하려면 가볍게 여행해야 한다.",
        author: "생텍쥐페리"
    },
    {
        quote: "오늘 누군가가 그늘에 앉아 쉴 수 있는 이유는 오래 전에 누군가가 나무를 심었기 때문이다.",
        author: "워렌 버핏"
    },
    {
        quote: "가장 위대한 영광은 한 번도 실패하지 않음이 아니라 실패할 때마다 다시 일어서는 데에 있다.",
        author: "공자"
    },
    {
        quote: "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다.",
        author: "마하트마 간디"
    },
    {
        quote: "최고가 되기 위해 가진 모든 것을 활용하세요. 이것이 바로 현재 제가 사는 방식이랍니다.",
        author: "오프라 윈프리"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;


// Math.round() // 반올림
// Math.ceil() // 올림
// Math.floor() // 버림