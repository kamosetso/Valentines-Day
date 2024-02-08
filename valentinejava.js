const loveQuotes=[
    "YOU MAKE MY HEART SKIP.",
    "I HEARTS YOU BUNNY.",
    "LOVE OF MY LIFE."
];

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

newQuoteButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);
    quoteElement.textContent= loveQuotes[randomIndex];
})