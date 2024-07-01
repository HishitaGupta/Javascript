//Date- an Object

let myDate= new Date();
// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

let createdDate= new Date (2024,0,1,5,3); //yy-mm-dd-hh-min-sec
let createdDate1= new Date ("2024-01-1");  //yy-mm-dd
// console.log(createdDate.toLocaleString());
// console.log(createdDate1.toLocaleString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000)); //in order to get seconds
console.log(createdDate.getMonth()+1);

let newDate= new Date();

newDate.toLocaleString('default',{
    weekday:"long"
})