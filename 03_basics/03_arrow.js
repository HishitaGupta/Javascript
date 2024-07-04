//this  -> refers to current context
//on console of browser - this refers to the current window object witth multiple properties and functions
//in node js environment it returns empty braces

const user = {
    username :"Hishita",
    price:999,

    welcommeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}

// user.welcommeMessage();
// user.username="Hish";             //context changed
// user.welcommeMessage();
// console.log(this);                 //->gives empty parenthesis

//-------------arrow functions-----------------

const chai = () =>{
    let username = "hishita"                 //this can be used in arrow function
console.log(this); //{}
}

chai();

//ways------------------------

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// const addTwo = (num1,num2)=> num1+num2   //no need to add return and parenthesis if single line ->Implicit return
const addTwo = (num1,num2)=> (num1+num2)  

