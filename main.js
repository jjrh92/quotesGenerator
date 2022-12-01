// Variables

let btn = document.querySelector ("#new-quote");
let quote = document.querySelector (".quote");
let person = document.querySelector (".person");

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Gandhi`
 }, {
    quote: `"When life leaves us blind, love keeps us kind."`,
    person: `Chester Bennington`
 }, {
    quote: `"To improve is to change; to be perfect is to change often."`,
    person: `Winston Churchill`
 }, {
    quote: `"Behind every great man is a woman rolling her eyes."`,
    person: `Jim Carrey`
 }, {
    quote: `"The way to get started is to quit talking and begin doing."`,
    person: `Walt Disney`
 }, {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    person: `Eleanor Roosevelt`
 }, {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    person: `Babe Ruth`
 }, {
    quote: `"Be yourself. No one can say you are doing it wrong."`,
    person: `Charlie Brown`
 }, {
    quote: `"The phrase 'seeing the elephant' refers to gaining experience of the world at a significant cost."`,
    person: `Americanism`
 }, {
    quote: `"Limit your 'always' and your 'nevers'."`,
    person: `Amy Poehler​​`
 }, ];

btn.addEventListener ("click", function (){

    let random = Math.floor (Math.random () * quotes.length);
    quote.innerText = quotes [random].quote;
    person.innerText = quotes [random].person;

});

// JULIO REYES