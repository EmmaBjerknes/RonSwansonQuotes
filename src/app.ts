const quotesCard = document.querySelector('#quotesDiv') as HTMLDivElement;
const quotesParagraf = document.createElement ('p');
quotesParagraf.innerHTML = "Give me a sec to get a nice epic quote for you...";
quotesCard.append(quotesParagraf);
const likeBtn = document.querySelector('#likeBtn') as HTMLButtonElement;
const nxtBtn = document.querySelector('#nextBtn') as HTMLButtonElement;

let nrClicked: number = 0;

const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/15";

const getUrl = fetch(url)
    .then(response =>{
        return response.json();
    }).then(quoteArr =>{
        quotesParagraf.innerHTML= "";
        showQuote(quoteArr, nrClicked) 
    });


function showQuote(quoteArr:any, nrClicked:number):void{
    console.log(typeof quoteArr);
    quotesParagraf.innerHTML = quoteArr[nrClicked];
    quotesCard.append(quotesParagraf); 

    nxtBtn.addEventListener('click', function(event){
        event.preventDefault();
        quotesParagraf.innerHTML = "";
        nrClicked++; 
        if (nrClicked>=15){
            nrClicked = 0;
        }
        quotesParagraf.innerHTML = quoteArr[nrClicked];
    })
}


likeBtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Love this!');
})
