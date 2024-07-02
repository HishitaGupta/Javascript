
function addTwoNumbers(number1,number2)
{
    return number1+number2;
}

const result = addTwoNumbers(2,3);
// console.log(result);

function logInUserMessage(username){
    if(username===undefined)
        { console.log("please enter a username")

    }else{return `${username} just logged in`}
     
  
}

// console.log(logInUserMessage("Hishita"))
// console.log(logInUserMessage()) //->returns undefined

function calculateCartPrice(val1,val2,...num1){ //rest operator takes all values and return them in a bundle-array
    //helps to pass multiple values in arguments no limit fixed
    return num1
}
// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200,300,400));

//----------------using object as parameter in function

const user = {
    username:"Hishita",
    price:399
}

function usingObject (anyobject){
    console.log(`Hello ${anyobject.username} , price is ${anyobject.price}`);
}
usingObject(user); //can also pass complete object here 


//----------------using array as parameter in function

const array = [200, 300 ,499 ,300];

function arrayOperation(getarray){
    console.log(getarray[0]);
}

arrayOperation(array);



