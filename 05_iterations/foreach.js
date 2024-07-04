const coding =["js","ruby","cpp"]

coding.forEach((val)=>{
    // console.log(val);
})

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)      //pass a function as a reference/

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})
//has access to item , index and full array

const myCoding = [
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})
