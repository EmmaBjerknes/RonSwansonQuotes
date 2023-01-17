const quotesCard = document.querySelector('#quotesDiv') as HTMLDivElement;
const quotesParagraf = document.createElement ('p');
quotesParagraf.innerHTML = "Give me a sec to get a nice epic quote for you...";
quotesCard.append(quotesParagraf);

const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

const getUrl = fetch(url)
    .then(response =>{
        return response.json();
    }).then(quoteArr =>{
        quotesParagraf.innerHTML= "";

        showQuote(quoteArr) 
    })

function showQuote(quoteArr: string):void{
    quotesParagraf.innerHTML = quoteArr;
    quotesCard.append(quotesParagraf); 
}