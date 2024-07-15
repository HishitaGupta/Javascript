// const promiseOne = new Promise(function (resolve, reject) {
//     //Do any async task
//     //DB calls,cryptography
//     setTimeout(function () { //async task
//         console.log('Async Task is complete');
//         resolve();                          //connects to then
//     }, 1000)
// })

// promiseOne.then(function () {                  //due to resolve after task completion function comes here
//     console.log("Promise Consumed");
// })

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Async task 2');
//     }, 1000);
// }).then(function () {
//     console.log('Async 2 resolved');
// })




// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ user: "Hishita", pass: "2020" })           //pass data here

//     }, 1000)
// })

// promiseThree.then(function (user) {            //data will be received here
//     console.log(user);

// })

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ user: "Hishita", pass: "2021" })
//         }
//         else {
//             reject("Error:Something Went Wrong")
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.user;          //promise cant be assigned to a variable
// }).then((username) => {
//     console.log(username);
// }).catch(function (error) {       //to handle if error coccurs
//     console.log(error);
// }).finally(() => {
//     console.log("resolved or rejected"); //a default always runs
// })

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ user: "Hishita", pass: "2" })
//         }
//         else {
//             reject("ERROR")
//         }
//     }, 1000)
// })
// //handling proise with async await

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive      //Promise is an object
//         console.log(response);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();

// async function getGithubUser(){
//     try{
//         const user = await fetch('https://api.api-ninjas.com/v1/cats?name=abyssinian')
//         const data= await user.json();  //use with with things that take time
//         console.log(data);
//     }
//     catch(error){
//         console.log("ERROR ENCOUNTERED",error);
//     }
// }
// getGithubUser();

//doing above using.then

fetch('https://api.api-ninjas.com/v1/cats?name=abyssinian') //returns a promise
    .then((catdata) => {
        return catdata.json();
    }).then(function (data) {
        console.log(data[0].children_friendly);;
    }).catch(function (error) {
        console.log("errorrrr", error);
    })
//yooooo -works----good synt 

fetch('https://api.github.com/users/hishitagupta',{/*parameters can be sent here like username password*/}) //returns a promise
    .then((data) => {
        return data.json();
    }).then(function (dataObject) {
        console.log(dataObject.followers);;
    }).catch(function (error) {
        console.log("errorrrr", error);
    })                                         //worksssssssssss

//go to mdn docs fetch standard to understand in detail about cors blocking etc