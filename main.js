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
    quote: `"There isn't a flight goes by when I don't stare out of the window and thank my lucky stars for what I'm feeling and seeing."`,
    person: `Richard Branson`
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
    quote: `"Before you marry a person, you should first make them use a computer with slow Internet to see who they really are."`,
    person: `Will Ferrel`
 }, {
    quote: `"The phrase seeing the elephant refers to gaining experience of the world at a significant cost."`,
    person: `Americanism`
 }, {
    quote: `"The thruth is that you always know the right thing to do. The tough part is doing it."`,
    person: `Norman Schwarzkopf`
 }, ];

btn.addEventListener ("click", function (){

    let random = Math.floor (Math.random () * quotes.length);
    quote.innerText = quotes [random].quote;
    person.innerText = quotes [random].person;

});

// JULIO REYES