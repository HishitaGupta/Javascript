const form= document.querySelector('form');

form.addEventListener("submit",(e)=>{
    e.preventDefault(); //to prevent form from doing its default function that is submiting

    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const result=document.querySelector("#results");

    if(height=="" || height==null ||isNaN(parseInt(height))){
        result.innerHTML="Please enter a valid number";}
    else if(weight=="" || weight==null ||isNaN(weight)){
        result.innerHTML="Please enter a valid number";
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`;
    }
    

});

//.value -to extract value from form field














// const height=document.querySelector("#height");
// const weight=document.querySelector("#weight");
// const button=document.querySelector("#btn")
// const resultDiv=document.querySelector("#result");

// btn.addEventListener("click",()=>{
//     const result = int(weight.innerText)/(int(height.innerText)**2);
//     console.log(result);
//     resultDiv.innerText=result;
//     resultDiv.appendChild(result);
   

// })


