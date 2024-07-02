//singleton - using constructor - Object.create
//non-singleton - using literals

//Object Literals
const mySymbol = Symbol("key1");

const jsuser={
    name : "Hishita",
    "full name":"hishita Gupta",
    [mySymbol]:"mykey",            //to use symbol as a key declare it in this way
    age:"18",
    location:"rajpura",
    email:"hishita@google.com",
    isLoggedIn:false,
    lastLogInDays:["Monday","Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]); //only way to access this
// console.log(jsuser[mySymbol]); //usimg symbol as a key ~~~~~~~~(Interesting)~~~~~~~~~~~~
// console.log(jsuser);

// jsuser.email="hishita@microsoft.com";
// Object.freeze(jsuser) //cant modify values of keys now

jsuser.greeting= function(){
    console.log("hello js user");
}
console.log(jsuser.greeting())
console.log(jsuser.greeting)

jsuser.greetingTwo= function(){
    console.log(`hello js user ${this.name}`);
}
console.log(jsuser.greetingTwo());