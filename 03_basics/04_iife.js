//Immediately Invoked function Expression
//to prevent from pollution by global scope variables

(function chai (){                         //->named iife
    console.log(`DB connected`);
})();

//->add semicolon since the compiler doesnot know where to end execution of function

// (()=>{
//     console.log(`DB connected two`);
// })();

((name)=>{                                  //->simple iife
    console.log(`DB connected two ${name}`);
})("Hishita");

//()() ->first for function declaration and second for calling

//control flow and switch