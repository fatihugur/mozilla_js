//MOZILLA JS LESSONS

//VAR && LET
// You can use var as many times
var myName = "Chris";
var myName = "Bob";

// You can not use let two times
// let myName = "Chris";
// let myName = "Bob"; // throuw error for second line
//but you can do this
// let myName = "Chris";
// myName = "Bob";

//An aside on variable naming rules
// You can call a variable pretty much anything you like, but there are limitations. Generally, you should stick to just using Latin characters (0-9, a-z, A-Z) and the underscore character.
// You shouldn't use other characters because they may cause errors or be hard to understand for an international audience.
// Don't use underscores at the start of variable names — this is used in certain JavaScript constructs to mean specific things, so may get confusing.
// Don't use numbers at the start of variables. This isn't allowed and causes an error.
// A safe convention to stick to is so-called "lower camel case", where you stick together multiple words, using lower case for the whole first word and then capitalize subsequent words. We've been using this for our variable names in the article so far.
// Make variable names intuitive, so they describe the data they contain. Don't just use single letters/numbers, or big long phrases.
// Variables are case sensitive — so myage is a different variable from myAge.
// One last point: you also need to avoid using JavaScript reserved words as your variable names — by this, we mean the words that make up the actual syntax of JavaScript! So, you can't use words like var, function, let, and for as variable names. Browsers recognize them as different code items, and so you'll get errors.

//VARIABLES   types > - numbers, strings, booleans
let myAge = 12;
let myName2 = "Fatih";
let iAmALive = true;
let numbers = 6 > 3; //true boolean

//ARRAYS
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];

//array locations
console.log(myNameArray[0]); // should return 'Chris'
console.log(myNumberArray[2]); // should return 40

//OBJECTS

// In programming, an object is a structure of code that models a real-life object.
// You can have a simple object that represents a box and contains information about its width, length, and height,
// or you could have an object that represents a person, and contains data about their name, height, weight,
// what language they speak, how to say hello to them, and more.

let dog = { name: "Spot", breed: "Dalmatian" };

console.log(dog.name); // should return Spot
