var c = 300;              //global scope

if (true){
    let a = 10;
    const b =20;           //block scope
    c = 30;
}

// console.log(a);//a is not defined error
// console.log(b);//b is not defined error

console.log(c);//getting logged as 30 because var does changes globally


//-----------global scope is different in console of windows and on node js environment