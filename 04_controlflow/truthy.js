//-----------FALSY VALUES-----------
// false, 0, -0, BigInt 0n, null, undefined, NaN ,""

//-----------TRUTHY VALUES-----------
// true, "0",'false'," ",[],{} , function(){}

const emptyArray =[]
if(emptyArray.length===0){
    console.log("Array is empty");
}

const emptyObject ={};
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty")
}

//false == 0
//false  == ''
//0 == ''


//------------------NULLISH COALESCING OPERRATOR (??) : nul undefined------------------
//helps to handle null and undefined errors

let val1;
// val1 = 5??10;
// val1 =undefined ?? null;
// checks first value if it is null or undefined then assigns the variable second value without checking
val1=null??10;


console.log(val1);


//-------------------TERNARY OPERATOR------------------

const ice =100;
const a = ice>100?true:false;
console.log(a);