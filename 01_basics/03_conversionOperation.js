// let score= "33abx" 
//->valueInNumber=NaN type=number

// let score= null
//->valueInNumber=0 type=number

// let score= undefined;
//->valueInNumber=NaN type=number

let score= true;
//->valueInNumber=1 type=number

//If a variable is converted in Boolean
// 1->true
//  0->false
//hishita->true
// ""->false

console.log(typeof score);
console.log(typeof (score)); //method

let valueInNumber = Number(score)
//use all datatypes with first letter capital
console.log(typeof valueInNumber);
console.log(valueInNumber);

//special type-NaN->Not a number 