// let score= "33abx" 
//->valueInNumber=NaN type=number

// let score= null
//->valueInNumber=0 type=number

// let score= undefined;
//->valueInNumber=NaN type=number

let score = true;
//->valueInNumber=1 type=number

//If a variable is converted in Boolean
// 1->true
//  0->false
//hishita->true
// ""->false

// console.log(typeof score);
// console.log(typeof (score)); //method

// let valueInNumber = Number(score)
// //use all datatypes with first letter capital
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//special type-NaN->Not a number 

// ----------------------------------Operations------------------------------------

let str1 = "hello";
let str2 = " hishita";
console.log(str1 + str2); //hello hishita
console.log("1" + 2);    //12
console.log(1 + "2");   //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

//conversion-if string is at first everything is converted to string if number is at first evertything is converted to number 

// ----------------------------
// prefix and postfix operator ++a,a++