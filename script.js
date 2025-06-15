function getComputerChoice(min, max) {

    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const choice = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    if (choice === 1) {
        return "Rock".toUpperCase();
    } else if (choice === 2) {
        return "Paper".toUpperCase();
    } else {
        return "Scissors".toUpperCase();
    }
}

function getHumanChoice() {

    let choice = prompt("enter your choice: ");
    choice = choice.toUpperCase();
    return choice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let tieScore = 0;


    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("Tie! Try again");
            tieScore += 1;
        } else if (humanChoice === "ROCK" && computerChoice === "PAPER") {
            console.log("You lose! Paper beats Rock")
            computerScore += 1;
        } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
            console.log("You lose! Scissors beats Paper")
            computerScore += 1;
        } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
            console.log("You lose! Rock beats Scissors")
            computerScore += 1;
        } else {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        }
    }

    for (let i = 0; i < 5; i++) {

        let computerSelection = getComputerChoice(0, 4);
        let humanSelection = getHumanChoice();

        console.log(`Your choice: ${humanSelection}`);
        console.log(`Computer choice: ${computerSelection}`);

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game with ${humanScore - computerScore} points!!!`);
    } else if (computerScore > humanScore) {
        console.log(`You loose the game with ${computerScore - humanScore} points!!!`);
    } else {
        console.log(`!!!Tie with ${tieScore}!!!`);
    }
}

playGame();