const clock = document.querySelector("#clock");

setInterval(()=>{
    const date= new Date();
    console.log(date);
    clock.innerText = date.toLocaleTimeString();
},1000)