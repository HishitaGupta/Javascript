const fruit = ["mango" , "litchi" , "guava"];
const veg = ["potato" ,"tomato" ,"brinjal" ," cauliflower"];

// console.log(fruit.push(veg));
// console.log(fruit);

/* push - does changes in the original array and returns new length of array */

// const total= fruit.concat(veg);
// console.log(total);

// const total_new = [...fruit , ...veg,15];
// //using spread
// console.log(total_new);

//flat-to make all nested array into 1d array

// const array= [1,2,[3,4,[6,5,4]],5,6]
// const new_array=array.flat(Infinity)  //infinity means sort all depth
// console.log(new_array);

//convert to array operations
console.log(Array.isArray("hishita"));
console.log(Array.from("hishita"));
console.log(Array.from({name:"hishita"}));
//returns empty array if it cant convert we need to specify that array should be of key or values~~~~~~~~~~(Interesting)

let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));
