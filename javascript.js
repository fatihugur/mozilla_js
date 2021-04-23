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

//DYNAMIC TYPING -TYPEOF
let myNumber10 = "500"; // oops, this is still a string
console.log(typeof myNumber10); //STRING
myNumber11 = 500; // much better — now this is a number
console.log(typeof myNumber11); //NUMBER

//CONSTANTS IN JAVASCRIPT - not changeable
const daysInWeek = 7;
const hoursInDay = 24;

// const works in exactly the same way as let, except that you can't give a const a new value.
// In the following example, the second line would throw an error:
// const daysInWeek = 7;
// daysInWeek = 8;

//Test your self

myName9 = "Fatih";
myAge9 = 44;
// Add your code here

// Don't edit the code below here!

// section.innerHTML = " ";
// let para1 = document.createElement("p");
// para1.textContent = myName9;
// let para2 = document.createElement("p");
// para2.textContent = myAge9;
// section.appendChild(para1);
// section.appendChild(para2);

//Type of numbers
// Integers are whole numbers, e.g. 10, 400, or -5.
// Floating point numbers (floats) have decimal points and decimal places, for example 12.5, and 56.7786543.
// Doubles are a specific type of floating point number that have greater precision than standard floating point numbers (meaning that they are accurate to a greater number of decimal places).
// We even have different types of number systems! Decimal is base 10 (meaning it uses 0–9 in each column), but we also have things like:

// Binary — The lowest level language of computers; 0s and 1s.
// Octal — Base 8, uses 0–7 in each column.
// Hexadecimal — Base 16, uses 0–9 and then a–f in each column. You may have encountered these numbers before when setting colors in CSS.

let myInt = 5;
let myFloat = 6.667;
console.log(myInt);
console.log(myFloat);

console.log(typeof myInt);
console.log(typeof myFloat);

let lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

//native code???
let myNumber = "74";
// myNumber + 3;
Number(myNumber) + 3;
console.log(Number);

//Arithmetic operators
// +	Addition
// -	Subtraction
// *	Multiplication
// /	Division
// %	Remainder (sometimes called modulo)
// **	Exponent

var num2 = 50;
var num1 = 10;
//human logic read this code num2 + num1 / 8 + 2; as 50+10):(8+2)= 60:10 = 6 //
//you may read this as "50 plus 10 equals 60", then "8 plus 2 equals 10", and finally "60 divided by 10 equals 6" but
console.log(num2 + num1 / 8 + 2); //53.25 //computer logic > read >
//But the browser does "10 divided by 8 equals 1.25", then "50 plus 1.25 plus 2 equals 53.25".
console.log((num2 + num1) / (8 + 2)); // (50+10):(8+2)= 60:10 = 6 //

// Increment and decrement operators
//increment (++) and decrement (--) operators.
//3++;  // this returns with error at console
let numPlus1 = 4;
numPlus1++;
//++numPlus1;
console.log(numPlus1); //4+1= 5 // returns as 5

let numMin2 = 6;
numMin2--; // 5
// --numMin2; // 5
console.log(numMin2); //6-1= 5 returns as 5

//ASSIGNMENT OPERATORS

let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
console.log(y); // 4

// Assignment operators are operators that assign a value to a variable.
// We have already used the most basic one, =, loads of times — it assigns the variable on the left the value stated on the right:

// +=	Addition assignment  x += 4; >>> shortcut for >> x = x + 4;
// -=	Subtraction assignment x -= 3; >>> shortcut for >> x = x - 3;
// *=	Multiplication assignment x *= 3; >>> shortcut for >> x = x * 3;
// /=	Division assignment x /= 5; >>> shortcut for >> x = x / 5;

let x1 = 3; // x contains the value 3
let y1 = 4; // y contains the value 4
// x1 *= y1; // x now contains the value 12
console.log((x1 *= y1)); //12

//COMPRASION OPERATOR

// ===	Strict equality
// !==	Strict-non-equality
// <	Less than
// >	Greater than
// <=	Less than or equal to
// >=	Greater than or equal to

const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}
