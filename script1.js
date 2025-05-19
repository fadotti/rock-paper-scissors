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

function getHumanChoice () {
    const choice = prompt("Pick your choice", "rock   paper   scissors");   
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            console.log("It's a tie");
        } else if (computerChoice == 'paper') {
            console.log("You lose, paper beats rock.");
            computerScore += 1;
        } else {
            console.log("You win, rock beats scissors");
            humanScore += 1;
        }
    }

    if (humanChoice == 'paper') {
        if (computerChoice == 'paper') {
            console.log("It's a tie");
        } else if (computerChoice == 'scissors') {
            console.log("You lose, scissors beats paper.");
            computerScore += 1;
        } else {
            console.log("You win, paper beats rock");
            humanScore += 1;
        }
    }

    if (humanChoice == 'scissors') {
        if (computerChoice == 'scissors') {
            console.log("It's a tie");
        } else if (computerChoice == 'rock') {
            console.log("You lose, rock beats scissors.");
            computerScore += 1;
        } else {
            console.log("You win, scissors beats paper");
            humanScore += 1;
        }
    }
}

for (let i = 1; i < 6; i++) {
    playRound(getHumanChoice(), getComputerChoice());

    if (i == 5) {
        if (humanScore > computerScore) {
            console.log(`You win! Your score is ${humanScore} against the computer's ${computerScore}`);
        } else if (humanScore < computerScore) {
            console.log(`You lose. Your score is ${humanScore} against the computer's ${computerScore}`);
        } else {
            console.log(`It's a tie. Your score is ${humanScore} against the computer's ${computerScore}`);
        }
    }
}