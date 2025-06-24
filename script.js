function getComputerChoice(min, max) {

    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const choice = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

const btns = document.querySelectorAll(".btn");
btns.forEach(button => {
    button.addEventListener("click", (event) => {
        const humanChoice = event.target.textContent;
        const computerChoice = getComputerChoice(0, 4);
        playGame(humanChoice, computerChoice);
    });
});

function playGame(Hchoice, Cchoice) {
    let humanScore = 0;
    let computerScore = 0;
    let tieScore = 0;


    if (Hchoice === Cchoice) {
        alert("Tie! Try again");
        tieScore += 1;
    } else if (Hchoice === "Rock" && Cchoice === "Paper") {
        alert("You lose! Paper beats Rock");
        computerScore += 1;
    } else if (Hchoice === "Paper" && Cchoice === "Scissors") {
        alert("You lose! Scissors beats Paper");
        computerScore += 1;
    } else if (Hchoice === "Scissors" && Cchoice === "Rock") {
        alert("You lose! Rock beats Scissors");
        computerScore += 1;
    } else {
        alert(`You Win! ${Hchoice} beats ${Cchoice}`);
        humanScore += 1;
    }

    // if (humanScore > computerScore) {
    //     console.log(`You win the game with ${humanScore - computerScore} points!!!`);
    // } else if (computerScore > humanScore) {
    //     console.log(`You loose the game with ${computerScore - humanScore} points!!!`);
    // } else {
    //     console.log(`!!!Tie with ${tieScore}!!!`);
    // }
}