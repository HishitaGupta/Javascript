/*
 Js is a dynamically typed language since we dont need to declare the variable with datatypes first
 */


/*
 Primitive and Non Primitive based on how the data types are stored in the memory and how they can be accessed.
 */


 /* Primitive : 7 types Call By Value
 String,Number,BigInt,Null,Undefined,Symbol,Boolean
 */


 //Symbols help to differentiate and uniquely identify
 const id=Symbol(123);
 const bid=Symbol(123);
 console.log(id===bid); //false

 //Bigint
 const bigNumber=478826937834982741090n;

 
 /* Non-Primitve : Call by reference
 Array,Objects,Functions
*/

const vegetables=['aloo','bhindi']; //array
const obj={ //object
    name:"hishita",
    age:18,
}
const myFunction=function(){  //function
    console.log("hello");
}
myFunction();

/*TypeOf Conversions
Undefined-Undefined
Null-Object
NUmber,String,Object,Bigint-same
function-Function Object
 */

console.log(typeof bigNumber);