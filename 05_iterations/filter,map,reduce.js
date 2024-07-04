//forEach doesnot return any value

const myNum =[1,2,3,4,5,6,7,8,9,10];

//filter - returns an array according to specified condition

// const newNum = myNum.filter((num)=>num>4)
// console.log(newNum);

const newNum = myNum.filter((num)=>{
    return num>4;
})

//---------------using foreach
// const newNum =[];
// myNum.forEach((item)=>{
//     if(item>4){
//        newNum.push(item);
//     }
// })
// console.log(newNum);

//-------------------using map----------------

const myNums=[1,2,3,4,5,6,7,8,9,10]
//map automatically returns value
const newNums = myNums.map((num)=>num+10);
//if u open scope then use return keyword
// console.log(newNums);


//-----------------------chaining

const Hnums=[1,2,3,4,5,6,7,8,9,10];
const newHnums = Hnums
                        .map((num)=>num*10)
                        .map((num)=>num+1)  //gets values from result of first chain
                        .filter((num)=>num>=30)

// console.log(newHnums)


//-------------------------------reduce
//returns sum of array if starts with 0

const myTotal = Hnums.reduce((accumulator,currentValue)=> accumulator+currentValue,0)
// console.log(myTotal);


const shoppingCart = [
    {
        name:"py",
        price:999
    },
    {
        name:"js",
        price:999
    },
    {
        name:"cpp",
        price:999
    },
    {
        name:"dsa",
        price:999
    }

]

const cartTotal = shoppingCart.reduce((acc , item)=>acc+item.price,0)
console.log(cartTotal);