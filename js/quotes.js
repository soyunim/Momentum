const quotes = [
    {
        quote: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
        author: "Samuel Beckett",
    },
    {
        quote: "只有自我尊重的人别人才会尊重他。",
        author: "孔子",
    },
    {
        quote: "할 수 있다고 믿는 사람은 그렇게 되고, 할 수 없다고 믿는 사람도 역시 그렇게 된다.",
        author: "샤를 드골",
    },
    {
        quote: "A smooth sea never made a skilled sailor.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "너의 길을 가라 남들이 무엇이라 하든지 내버려 두라",
        author: "단테 알리기에리",
    },
    {
        quote: "Never tolerate disrespect or you might start believing you deserved it.",
        author: "Carlos Del Valle",
    },
    {
        quote: "The foundation for self-esteem is self-understanding.",
        author: "Maxime Lagace",
    },
    {
        quote: "Don’t compare your chapter 1 to someone else’s chapter 20.",
        author: "Tom Bilyeu",
    },
    {
        quote: "Surround yourself with people who only lift you higher.",
        author: "Payla Kadakia",
    },
    {
        quote: "Put all excuses aside and remember this: you are capable.",
        author: "Zig Ziglar",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML = randomQuote.quote;
author.innerHTML = randomQuote.author;