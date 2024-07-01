const number = 400;
// console.log(number);

const balance = new Number(100); //gives in form of object with functions
// console.log(balance);

const otherNumber = 123.234;

// console.log(otherNumber.toFixed(2)); //gives twodigits after decimal
// console.log(otherNumber.toPrecision(4)); //returns string with specified number of digits
// console.log(otherNumber.toPrecision(4).length); //returns string 

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //converts to string using country decimal system of commas

// console.log(Number.MIN_VALUE); //maxvalue etc.

//=================================Maths=========================================Built in Library
// console.log(Math)
// console.log(Math.abs(-4)) //gives absolute value - neg to pos nd pos remains pos
// console.log(Math.round(7.8)) 
// console.log(Math.floor(7.8)) 
// console.log(Math.ceil(7.8)) 

// console.log(Math.min(7.8,5,6,7)) 

console.log((Math.random())); //0-1
console.log(((Math.random()) * 10) + 1); //1-10
console.log(Math.floor(Math.random() * 10) + 1); //1-10 (without decimal)

//Important formula***************

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

