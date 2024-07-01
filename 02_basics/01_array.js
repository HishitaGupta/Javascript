//array operations create shallow copies - (mutable data type)

/*
---shallow copy - copies share the same reference
---deep copy - copies don't share same reference point

 */

const myArr = [0,1,2,3];
const myArr2 = new Array (1,2,3,4);

// Array Methods

// myArr.push(6);
// myArr.pop();
// myArr.unshift(9); //adds value in the beginning shifts all elements to the right
// myArr.shift(); //removes first element from array


// console.log(myArr.includes(9)); //returns boolean t & f
// console.log(myArr.indexOf(9)); //if value is not present in the array returns -1

// const newArr = myArr.join(); //adds all elements from array and converts them to string
// console.log(newArr);

// slice and splice
console.log("A ",myArr);

const my1 = myArr.slice(1,3);   //returns copy of section of array

console.log(my1);
console.log("B ",myArr);

const my2 = myArr.splice(1,3); //removes the specified range from array and also returns it.(last index is also included)
console.log("C ",my2);
console.log(myArr)

//splice(start, deleteCount, item1, item2)