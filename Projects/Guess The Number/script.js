let randomNo = parseInt((Math.random()*100)+1);
console.log(randomNo);
let play=true;
let guessedNum =(document.querySelector('#guessField').value);
let submit = document.querySelector('#subt');
let previousGuesses = document.querySelector(".guesses");
// console.log(previousGuesses);
let remainingGuesses = document.querySelector(".lastResult");
let messageField = document.querySelector(".lowOrHi")
let array=[];   
let guess = 0;
    
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if (play){
        guessedNum = (document.querySelector('#guessField').value);
        // console.log((guessedNum));
        checkvalue(guessedNum);
    }
})




function checkvalue(guessedNum){
    if (isNaN(guessedNum)|| guessedNum==0  || guessedNum<0 || guessedNum>100){
       displayMessage("Enter a valid number between 1-100");
       fieldsEmpty();
       endgame();
    }
    else{
        compare(guessedNum);

    }

}

function compare(guessedNum){
    if(parseInt(guessedNum)===randomNo){
        displayMessage("Winner");
        endgame();
    }
    else if((parseInt(guessedNum) > randomNo) && guess!==10){
        displayMessage("Number is too high");
    }
    else if ((parseInt(guessedNum) < randomNo) && guess!==10){
        displayMessage("Number is too low");
        
    }
    fieldsEmpty();
}

function displayMessage(message){
   messageField.innerHTML=`<span>${message}</span>`
}

function fieldsEmpty(){
    guess++;
    let guessedNum = document.querySelector('#guessField');
    array.push(guessedNum.value);
    previousGuesses.innerHTML += `${guessedNum.value},`;
    remainingGuesses.innerHTML = `${10 - guess}`;
    // console.log(guess);
    guessedNum.value = '';
    if (guess === 10 && play ) {
        endgame();
    }}
  
function endgame(){
   
        play=false;
        guessedNum.disabled=true;
        newGame();
    

}

function newGame(){
        let newGamebtn = document.createElement('button');
        newGamebtn.textContent='Play New Game';
        newGamebtn.style.cursor='pointer';
        newGamebtn.addEventListener("click",()=>{
            guessedNum.disabled=false;
            play=true;
            array=[];
            guess=0;
            previousGuesses.innerHTML+=``;
            remainingGuesses.innerHTML=``;
            randomNo = parseInt((Math.random() * 100) + 1);
   
        });
        messageField.appendChild(newGamebtn);
}


