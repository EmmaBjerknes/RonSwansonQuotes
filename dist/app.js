"use strict";
const quotesCard = document.querySelector('#quotesDiv');
const quotesParagraf = document.createElement('p');
quotesParagraf.innerHTML = "Give me a sec to get a nice epic quote for you...";
quotesCard.append(quotesParagraf);
const likeBtn = document.querySelector('#likeBtn');
const nxtBtn = document.querySelector('#nextBtn');
const likedQHolder = document.querySelector('#likedDiv');
const quotesHolder = document.createElement('p');
quotesHolder.innerHTML = "Aaaah..no liked so far? tss tss tss...";
likedQHolder.append(quotesHolder);
let nrClicked = 0;
const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/15";
const getUrl = fetch(url)
    .then(response => {
    return response.json();
}).then(quoteArr => {
    quotesParagraf.innerHTML = "";
    showQuote(quoteArr, nrClicked);
});
function showQuote(quoteArr, nrClicked) {
    quotesParagraf.innerHTML = quoteArr[nrClicked];
    nxtBtn.addEventListener('click', function (event) {
        event.preventDefault();
        quotesParagraf.innerHTML = "";
        nrClicked++;
        if (nrClicked >= 15) {
            nrClicked = 0;
        }
        ;
        quotesParagraf.innerHTML = quoteArr[nrClicked];
        likeBtn.style.display = 'inline-block';
    });
    likeBtn.addEventListener('click', function (event) {
        event.preventDefault();
        quotesHolder.style.display = 'none';
        const likedQuote = document.createElement('p');
        console.log(quoteArr[nrClicked]);
        likedQuote.innerHTML = quoteArr[nrClicked];
        likedQHolder.append(likedQuote);
        likeBtn.style.display = 'none';
    });
}
