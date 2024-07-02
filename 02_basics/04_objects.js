//singelton
const instaUser = new Object();

instaUser.id=231;
instaUser.name="Hishita";
instaUser.isLoggedIn= true;

// console.log(instaUser);

const regularUser ={
    email:"hishu@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Hishita",
            lastName:"Gupta"
        }
    },

}
console.log(regularUser.fullname.userfullname.firstName);

//ways to join two objects

const obj1= {1:"a",2:"b",3:"c"}
const obj2= {11:"a",21:"b",31:"c"}

// const obj3= {obj1,obj2} //->creates nested objects
// const obj3= Object.assign({},obj1,obj2,) //parenthes are target and rest are sources


//using spread
const obj3 = {...obj1, ...obj2}
console.log(obj3);

//array of objects are returned from databases

const users = [
    {
        id:1221,
        name:"Hishitag"
    },
    {
        id:1222,
        name:"ishitag"
    },{
        id:1223,
        name:"shitag"
    }
]

// console.log(users[0].id);
// console.log(instaUser);

// console.log(Object.keys(instaUser)); //returns array of keys
// console.log(Object.values(instaUser)); //returns array of values
// console.log(Object.entries(instaUser)); //returns nested array of each key:value pair
// console.log(instaUser.hasOwnProperty('isLoggedIn')); //returns if the key is present or not

//Object Destructuring

const course = {
    courseName:"JS",
    courseInstructor:"Hishita"
}

const {courseInstructor:instructor}=course;
console.log(instructor);

//JSON - Javascript Object Notation








//non-singleton
const user = {};
