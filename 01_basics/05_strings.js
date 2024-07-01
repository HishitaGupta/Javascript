//String Interpolation
let name="Hishita";
let repoCount=60;
console.log(`My name is ${name} and my repo count is ${repoCount}.` );

//Ways to Declare String
let school="mukat"//creates simple string //use __proto__ to see all functions
const gameName= new String('hishitag') //using constructor->creates a string object // functions are visible by logging into console


// --------------------------------------------------

//String Comes with various methods
// console.log(gameName[0])
// console.log(gameName.__proto__) //to get the object -{}-can be viewed with values in console

//Methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// //charAt , indexOf , trim
// const sub= gameName.substring(0,4);
// console.log(sub)
console.log(gameName.slice(-6,6,2)); //can have negaitve index values(start,stop,)
console.log(gameName.slice(0)); //gives whole string
console.log(gameName.replace("g", "*"));
console.log(gameName);
console.log(gameName.includes("v"));
console.log(gameName.split("i")); //convertsinto array
console.log(gameName.anchor("www.google.com")); //convertsinto array


