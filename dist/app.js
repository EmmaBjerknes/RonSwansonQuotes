"use strict";
const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
const getUrl = fetch(url)
    .then(response => {
    return response.json();
}).then(ronObj => {
    console.log(ronObj);
});
