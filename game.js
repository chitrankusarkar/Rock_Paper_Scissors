let userScore = 0;
let compScore = 0;
const msg = document.getElementById("play");
const usc = document.getElementById("userscore");
const psc = document.getElementById("compscore");

const compGenChoice = () => {
    const opts = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3); //random() generates any no. from 0-1. Multiplying with 3 cz it will gen. any no. within 0-2
    return opts[choice];
};

const drawGame = () => {
    msg.innerText = "Game Draw!"
}

const showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = "User Won!"
        userScore++;
        document.getElementById("play").style.backgroundColor = "green";
    }
    else {
        msg.innerText = "Computer Won!";
        compScore++;
        document.getElementById("play").style.backgroundColor = "red";
    }
}

const updateResult = ()=>{
    usc.innerHTML = userScore;
    psc.innerHTML = compScore;
}

const playgame = (userChoice) => {
    const compChoice = compGenChoice();
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        //rock,paper
        if (userChoice === "rock")
            userWin = compChoice === "paper" ? false : true;
        //paper,scissors
        else if (userChoice === "paper")
            userWin = compChoice === "scissors" ? false : true;
        //scissors,rock
        else
            userWin = compChoice === "rock" ? false : true;
        showWinner(userWin);
        updateResult();
    }
}

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});