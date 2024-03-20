const MIN = document.getElementById("min");
const MAX = document.getElementById("max");
const GUESS = document.getElementById("guess"); 
const SUBMITBTN = document.getElementById("submitBtn");
const DISPLAY = document.getElementById("displayH1");
const SCORE = document.getElementById("score");
let number;
let score = 0;
if (localStorage.getItem("bestScore") == null){
    localStorage.setItem("bestScore", String(score));
}


function verifyInputs(){
    if (MIN.value == "" || MAX.value == "" || GUESS.value == ""){
        DISPLAY.textContent = "): Fill all the inputs :(";
        return false;
    }
    return true;
}

function testGuess(){
    if (verifyInputs()){
        number = Math.floor((Math.random() * (Number(MAX.value) - Number(MIN.value) + 1))) + Number(MIN.value);
        let msg = String(number) + "\n";
        if (Number(GUESS.value) != number){
            msg += "You Lose ,_,";
            score = 0;
        }else{
            msg += "You Win :D";
            score += 1;
            localStorage.setItem("bestScore", String(score));
        }
        DISPLAY.textContent = msg;
        SCORE.textContent = "Score: " + String(score) + " | Best: " + localStorage.getItem("bestScore");
    }
}

window.onload = function(){
    SCORE.textContent = "Score: " + String(score) + " | Best: " + localStorage.getItem("bestScore");
}
SUBMITBTN.onclick = testGuess;