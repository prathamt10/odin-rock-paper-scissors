function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

let player_score = 0;
let computer_score = 0;

function game(player_selection) {
    let verdict = "";
    const player_choice = player_selection;
    const computer_choice = getComputerChoice();

    if (player_choice == computer_choice) {
        verdict = "Draw!";
    }
    if (verdict) {
        return verdict;
    }

    if (player_choice == 0) {
        if (computer_choice == 1) {
            verdict = "You Lose!";
            computer_score++;
        } else {
            player_score++;
            verdict = "You Win!";
        }
    } else if (player_choice == 1) {
        if (computer_choice == 2) {
            verdict = "You Lose!";
            computer_score++;
        } else {
            player_score++;
            verdict = "You Win!";
        }
    } else {
        if (computer_choice == 0) {
            verdict = "You Lose!";
            computer_score++;
        } else {
            player_score++;
            verdict = "You Win!";
        }
    }

    return verdict;
}

function playRound(player_selection) {
    round_winner.textContent = game(player_selection);
    console.log(player_score, computer_score);
    if (player_score == 5 || computer_score == 5) {
        if (player_score == 5) {
            alert("player won");
        } else {
            alert("computer won");
        }
    }
}

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let round_winner = document.querySelector(".round-winner");

rock.addEventListener('click', () => playRound(0));
paper.addEventListener('click', () => playRound(1));
scissors.addEventListener('click', () => playRound(2));