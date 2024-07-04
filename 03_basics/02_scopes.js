var c = 300;              //global scope

if (true){
    let a = 10;
    const b =20;           //block scope
    c = 30;
}

// console.log(a);//a is not defined error
// console.log(b);//b is not defined error

// console.log(c);//getting logged as 30 because var does changes globally


//-----------global scope is different in console of windows and on node js environment

function one(){
    const username = "Hishita"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); website scope is inside two - child can access parents elements but parent cannot access child's
    two()
}
one()

//+++++++++++++++++++++Interesting+++++++++++++

addone(9)             //->function declarede in simple way can be called as this even before declaration

function addone(num){
    return num++
}

// addtwo(5) //->throws error
const addtwo = function (num){
    return num+2
}

//Hoisting - execution context