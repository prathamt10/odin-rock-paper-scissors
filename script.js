function getComputerChoice() {
    const choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            throw new Error("invalid_computer_choice");
    }
}

let player_score = 0;
let computer_score = 0;

function displayRoundResult(winner) {
    if (winner === "player") {
        player_score++;
        round_winner.textContent = "Player Won This Round!"
    } else if (winner === "computer") {
        computer_score++;
        round_winner.textContent = "Computer Won This Round!"
    } else {
        round_winner.textContent = "DRAW!";
    }
    score.textContent = `Player Score: ${player_score} Computer Score: ${computer_score}`;
    console.log(`player: ${player_score} computer: ${computer_score}`);
}

function playRound(player_choice) {
    const computer_choice = getComputerChoice();
    if (computer_choice === player_choice) {
        displayRoundResult("DRAW!");
        return;
    }

    if (player_choice === "rock") {
        if (computer_choice === "paper") {
            displayRoundResult("computer");
        } else {
            displayRoundResult("player");
        }
    } else if (player_choice === "paper") {
        if (computer_choice === "scissors") {
            displayRoundResult("computer");
        } else {
            displayRoundResult("player");
        }
    } else {
        if (computer_choice === "rock") {
            displayRoundResult("computer");
        } else {
            displayRoundResult("player");
        }
    }
}

function game(player_choice) {
    playRound(player_choice)
    if (player_score === 5 || computer_score === 5) {
        if (player_score === 5) {
            alert("PLAYER WINS!!!");
            player_score = 0;
            computer_score = 0;
        } else {
            alert("PLAYER LOSES!!!");
            player_score = 0;
            computer_score = 0;
        }
        round_winner.textContent = "";
        score.textContent = "";
    }
}

const round_winner = document.querySelector('.round-winner');
const buttons = document.querySelectorAll('button');
const score = document.querySelector('.score');

buttons.forEach((button) => {
   button.addEventListener('click', (e) => { game(e.target.className.split(' ')[0]) });
});