let playerScore = 0;
let computerScore = 0;
let round = 1;
let gameOver = false;

function chooseCharacter(character){

document.getElementById("characterSelect").style.display = "none";
document.getElementById("game").style.display = "block";

if(character === "winnie"){
    document.getElementById("playerImg").src = "images/micimacko.jpg";
    document.getElementById("computerImg").src = "images/malacka.jpg";
}else{
    document.getElementById("playerImg").src = "images/malacka.jpg";
    document.getElementById("computerImg").src = "images/micimacko.jpg";
}

}

function play(playerChoice){

if(gameOver) return;

let choices = ["ko", "papir", "ollo"];
let computerChoice = choices[Math.floor(Math.random() * 3)];

let result = "";

if(playerChoice === computerChoice){
    result = "Döntetlen! Mindketten kaptok 1 pontot.";

    playerScore++;
    computerScore++;
}
else if(
    (playerChoice === "ko" && computerChoice === "ollo") ||
    (playerChoice === "papir" && computerChoice === "ko") ||
    (playerChoice === "ollo" && computerChoice === "papir")
){
    result = "Te nyertél!";
    playerScore++;
}
else{
    result = "A gép nyert!";
    computerScore++;
}

document.getElementById("result").innerText =
"Te: " + playerChoice + " | Gép: " + computerChoice + " -> " + result;

document.getElementById("playerScore").innerText = playerScore;
document.getElementById("computerScore").innerText = computerScore;

document.getElementById("round").innerText =
"Kör: " + round + " / 3";

round++;
if(round > 3){
    gameOver = true;

    let final = "";

    if(playerScore > computerScore){
        final = "🎉 Te nyerted a játékot!";
    }
    else if(playerScore < computerScore){
        final = "😢 A gép nyert!";
    }
    else{
        final = "🤝 Döntetlen!";
    }

    document.getElementById("result").innerText = final;

    return;
}}