const array = [1,2,3,4,5];

//for of ->

for(num of array){
    // console.log(num);
}

const word = "Hishita";

// for(letter of word){
//     console.log(letter);
//}

//Map -> holds key value pairs -> holds unique values
const map = new Map();

map.set("IN","India")
map.set("EN","England")
map.set("FR","France")

// console.log(map);
for (const key of map){                  //gives array of key value pairs
    // console.log(key,":-",value);
}

for (const [key,value] of map){
    // console.log(key,":-",value);
}

const obj ={
    game1:"NFS",
    game2:"Spiderman"
}
// for (const [key,value] of obj){
//     console.log(key,":-",value);      ->Object is not iterable in this way
// }
