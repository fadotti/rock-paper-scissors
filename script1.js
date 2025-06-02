let humanScore = 0;
let computerScore = 0;

const playerScoreItem = document.querySelector("#your-score");
const computerScoreItem = document.querySelector("#computer-score");
const outcomeTextBox = document.querySelector("#outcome");

const playerChoice = document.querySelector("#player-choices");

playerChoice.addEventListener("click", event => {
    if(Math.max(humanScore, computerScore) >= 5){
        alert("Please reload the page to play again.");
    } else {
        let playerChoice =event.target.textContent.toLowerCase();
        console.log(playerChoice);

        playRound(playerChoice, getComputerChoice());
    } 
})

function getComputerChoice () {
    const number = Math.random();
    let computerChoice;

    if (number < 1/3) {
        computerChoice = "rock";
    } else if (number < 2/3) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function playRound (humanChoice, computerChoice) {
    let outcome = "";

    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            outcome = "It's a tie";
        } else if (computerChoice == 'paper') {
            outcome = "You lose, paper beats rock.";
            computerScore += 1;
        } else {
            outcome = "You win, rock beats scissors";
            humanScore += 1;
        }
    }

    if (humanChoice == 'paper') {
        if (computerChoice == 'paper') {
            outcome = "It's a tie";
        } else if (computerChoice == 'scissors') {
            outcome = "You lose, scissors beats paper.";
            computerScore += 1;
        } else {
            outcome = "You win, paper beats rock";
            humanScore += 1;
        }
    }

    if (humanChoice == 'scissors') {
        if (computerChoice == 'scissors') {
            outcome = "It's a tie";
        } else if (computerChoice == 'rock') {
            outcome = "You lose, rock beats scissors.";
            computerScore += 1;
        } else {
            outcome = "You win, scissors beats paper";
            humanScore += 1;
        }
    }
    outcomeTextBox.textContent = outcome;
    playerScoreItem.textContent = `Your score: ${humanScore}`;
    computerScoreItem.textContent = `Computer's score: ${computerScore}`;

    const winMessage = "You win! Reload the page to play again.";
    const defeatMessage = "Game over, the computer won. Reload the page to play again."

    if(Math.max(humanScore, computerScore) === 5) {
        outcomeTextBox.textContent = humanScore === 5 ? winMessage : defeatMessage;
    }
}